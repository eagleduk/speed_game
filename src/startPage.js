import axios from "axios";

const GetGameWords = async (callback) => {
	//const { data } = await axios.get("https://my-json-server.typicode.com/kakaopay-fe/resources/words");
	//return data;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://my-json-server.typicode.com/kakaopay-fe/resources/words");
    xhr.onreadystatechange = () => {
		if(xhr.readyState === 4) {
			if(xhr.status===200) {
				const data = eval("("+xhr.response+")");
				callback(data);
			} else {
				console.log(xhr.status, "Error", xhr.statusText);
				callback([]);
			}
		}
    }
	xhr.send();
}

const gameOver = (score, totalTime) => {
	const avg = !score ? 0 : totalTime / score ;
	localStorage.setItem("score", score);
	localStorage.setItem("avg", avg.toFixed(1));

	location.hash="#result";
}

let gameTimer;

const questionStart = (words = []) => {
	const time_content = document.querySelector("div.time--content");
	const score_content = document.querySelector("div.score--content");
	const question_content = document.querySelector("div.question--content");
	const answer_input = document.querySelector("input.answer--input");
	
	let text="", second=0, flag=true, time=0, totalTime=0, score=words.length, once=true;
	gameTimer = setInterval(() => {
		score_content.innerText = `점수: ${score} 점`;
		
		if(flag && words.length) {
			const word = words.shift();
			text = word.text,
			second = word.second;
			flag = false;
			time = 0;

			answer_input.value = "";
			question_content.innerText = `${text}`;
		}
		time++;
		time_content.innerText = `남은시간: ${second--}초`;

		if(once) {
			answer_input.addEventListener("keyup", (e) => {
				if(e.keyCode===13) {
					const answer = e.target.value;
					if(answer===text) {
						flag = true;
						totalTime += time;
						console.log(`정답.. ${text} ::: ${second} , ${time}, ${totalTime}`);
						if(!words.length) {
							clearInterval(gameTimer);
							gameOver(score, totalTime);
						}
					} else {
						e.target.value = "";
					}
				}
			});
			once = false;
		}

		if(second===0 && !flag) {
			flag = true;
			score--;
		}

		if(!words.length && flag) {
			clearInterval(gameTimer);
			gameOver(score, totalTime);
		}
	}, 1000);
}

const gameStart = async (e) => {
	if(e.target.className.indexOf("reset--btn") > -1 ) {
		clearInterval(gameTimer);
		location.hash="";
		
	} else {

		e.target.classList.add("reset--btn");

		const answer_input = document.querySelector("input.answer--input");
		answer_input.disabled = false;
		answer_input.focus();

		await GetGameWords(data => {
			questionStart(data)
		});

		//const words = [].concat(await GetGameWords(data => data));
		// questionStart(words);
	}
}

/* Header Render */
const render_header = () => {
	const header = document.createElement("header");
	
	/* 시간 Display */
	const time_content = document.createElement("div");
	time_content.className="time--content";
	time_content.innerText="남은시간: 0초";
	header.appendChild(time_content);
	
	/* 점수 Display */
	const score_content = document.createElement("div");
	score_content.className="score--content";
	score_content.innerText="점수: 0점";
	header.appendChild(score_content);
	
	return header;
}

/* Main Render */
const render_main = () => {
	const main = document.createElement("main");

	/* 문제 Display */
	const question_content = document.createElement("div");
	question_content.className="question--content";
	question_content.innerText="문제단어";
	main.appendChild(question_content);

	/* 정답 Display */
	const answer_content = document.createElement("div");
	answer_content.className="answer--content";
	const answer_input = document.createElement("input");
	answer_input.type="text";
	answer_input.className="answer--input"
	answer_input.disabled = true;
	answer_content.appendChild(answer_input);
	main.appendChild(answer_content);

	return main;
}

/* Footer Render */
const render_footer = () => {
	const footer = document.createElement("footer");

	const start_btn = document.createElement("a");
	start_btn.className="btn start--btn";
	start_btn.addEventListener("click", gameStart);

	footer.appendChild(start_btn);

	return footer
}

const render = () => {
	const APPCONTENT = document.querySelector("div#app-content");
	APPCONTENT.innerHTML="";
	APPCONTENT.appendChild(render_header());
	APPCONTENT.appendChild(render_main());
	APPCONTENT.appendChild(render_footer());
}

export {
	render
}