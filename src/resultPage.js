/* Header Render */
const render_header = () => {
	const header = document.createElement("header");
    
    const result_title = document.createElement("div");
    result_title.className="result--title--content";
    result_title.innerText="Mission Complete!";

    header.appendChild(result_title);
    
	return header;
}

/* Main Render */
const render_main = (score, avg) => {
    const main = document.createElement("main");
    
    const result_score = document.createElement("div");
    result_score.className = "result--score--content";
    result_score.innerText = `점수는 ${score}점 입니다.`;

    const result_avg = document.createElement("div");
    result_avg.className = "result--avg--content";
    result_avg.innerText = `단어당 평균 답변시간은 ${avg}초입니다.`;

    main.appendChild(result_score);
    main.appendChild(result_avg);

	return main;
}

/* Footer Render */
const render_footer = () => {
    const footer = document.createElement("footer");
    
	const start_btn = document.createElement("a");
	start_btn.className="btn restart--btn";
	start_btn.addEventListener("click", () => location.hash="#game" );

    footer.appendChild(start_btn);
    
	return footer
}

const render = (score, avg) => {
    const APPCONTENT = document.querySelector("div#app-content");
    APPCONTENT.innerHTML="";
    APPCONTENT.appendChild(render_header());
	APPCONTENT.appendChild(render_main(score, avg));
	APPCONTENT.appendChild(render_footer());
    
}

export {
    render
}
