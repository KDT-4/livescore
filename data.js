const event = [
    { event_no: 1, event_name: '축구' },
    { event_no: 2, event_name: '농구' },
    { event_no: 3, event_name: '피구' },
    { event_no: 4, event_name: '발야구' },
    { event_no: 5, event_name: '육상' },
];

const department = [
    { dept_no: 1, dept_name: '간호학과' },
    { dept_no: 2, dept_name: '건축학과' },
    { dept_no: 3, dept_name: '경영학과' },
    { dept_no: 4, dept_name: '글로벌한국학과' },
    { dept_no: 5, dept_name: '동물자원과학과' },
    { dept_no: 6, dept_name: '물리치료학과' },
    { dept_no: 7, dept_name: '바이오융합과학과' },
    { dept_no: 8, dept_name: '보건관리학과' },
    { dept_no: 9, dept_name: '빅데이터클라우드공학과' },
    { dept_no: 10, dept_name: '사회복지학과' },
    { dept_no: 11, dept_name: '상담심리학과' },
    { dept_no: 12, dept_name: '식품영양학과' },
    { dept_no: 13, dept_name: '신학과' },
    { dept_no: 14, dept_name: '아트앤디자인학과' },
    { dept_no: 15, dept_name: '약학과' },
    { dept_no: 16, dept_name: '영어영문학과' },
    { dept_no: 17, dept_name: '유아교육학과' },
    { dept_no: 18, dept_name: '음악학과' },
    { dept_no: 19, dept_name: '인공지능융합학부' },
    { dept_no: 20, dept_name: '체육학과' },
    { dept_no: 21, dept_name: '항공관광외국어학부' },
    { dept_no: 22, dept_name: '화학생명과학과' },
    { dept_no: 23, dept_name: '환경디자인원예학과' },
    { dept_no: 24, dept_name: '컴퓨터공학부' }
];


const teams = [
    { team_no: 1, team_name: '간호축구', event_no: 1, dept_no: 1 },
    { team_no: 2, team_name: '간호농구', event_no: 2, dept_no: 1 },
    { team_no: 3, team_name: '간호피구', event_no: 3, dept_no: 1 },
    { team_no: 4, team_name: '간호발야구', event_no: 4, dept_no: 1 },
    { team_no: 5, team_name: '간호육상', event_no: 5, dept_no: 1 },

    { team_no: 6, team_name: '건축축구', event_no: 1, dept_no: 2 },
    { team_no: 7, team_name: '건축농구', event_no: 2, dept_no: 2 },
    { team_no: 8, team_name: '건축피구', event_no: 3, dept_no: 2 },
    { team_no: 9, team_name: '건축발야구', event_no: 4, dept_no: 2 },
    { team_no: 10, team_name: '건축육상', event_no: 5, dept_no: 2 },

    { team_no: 11, team_name: '경영축구', event_no: 1, dept_no: 3 },
    { team_no: 12, team_name: '경영농구', event_no: 2, dept_no: 3 },
    { team_no: 13, team_name: '경영피구', event_no: 3, dept_no: 3 },
    { team_no: 14, team_name: '경영발야구', event_no: 4, dept_no: 3 },
    { team_no: 15, team_name: '경영육상', event_no: 5, dept_no: 3 },

    { team_no: 16, team_name: '글로벌한국축구', event_no: 1, dept_no: 4 },
    { team_no: 17, team_name: '글로벌한국농구', event_no: 2, dept_no: 4 },
    { team_no: 18, team_name: '글로벌한국피구', event_no: 3, dept_no: 4 },
    { team_no: 19, team_name: '글로벌한국발야구', event_no: 4, dept_no: 4 },
    { team_no: 20, team_name: '글로벌한국육상', event_no: 5, dept_no: 4 },

    { team_no: 21, team_name: '동물축구', event_no: 1, dept_no: 5 },
    { team_no: 22, team_name: '동물농구', event_no: 2, dept_no: 5 },
    { team_no: 23, team_name: '동물피구', event_no: 3, dept_no: 5 },
    { team_no: 24, team_name: '동물발야구', event_no: 4, dept_no: 5 },
    { team_no: 25, team_name: '동물육상', event_no: 5, dept_no: 5 },

    { team_no: 26, team_name: '물리치료축구', event_no: 1, dept_no: 6 },
    { team_no: 27, team_name: '물리치료농구', event_no: 2, dept_no: 6 },
    { team_no: 28, team_name: '물리치료피구', event_no: 3, dept_no: 6 },
    { team_no: 29, team_name: '물리치료발야구', event_no: 4, dept_no: 6 },
    { team_no: 30, team_name: '물리치료육상', event_no: 5, dept_no: 6 },

    { team_no: 31, team_name: '바이오축구', event_no: 1, dept_no: 7 },
    { team_no: 32, team_name: '바이오농구', event_no: 2, dept_no: 7 },
    { team_no: 33, team_name: '바이오피구', event_no: 3, dept_no: 7 },
    { team_no: 34, team_name: '바이오발야구', event_no: 4, dept_no: 7 },
    { team_no: 35, team_name: '바이오육상', event_no: 5, dept_no: 7 },

    { team_no: 36, team_name: '보건관리축구', event_no: 1, dept_no: 8 },
    { team_no: 37, team_name: '보건관리농구', event_no: 2, dept_no: 8 },
    { team_no: 38, team_name: '보건관리피구', event_no: 3, dept_no: 8 },
    { team_no: 39, team_name: '보건관리발야구', event_no: 4, dept_no: 8 },
    { team_no: 40, team_name: '보건관리육상', event_no: 5, dept_no: 8 },

    { team_no: 41, team_name: '빅데이터축구', event_no: 1, dept_no: 9 },
    { team_no: 42, team_name: '빅데이터농구', event_no: 2, dept_no: 9 },
    { team_no: 43, team_name: '빅데이터피구', event_no: 3, dept_no: 9 },
    { team_no: 44, team_name: '빅데이터발야구', event_no: 4, dept_no: 9 },
    { team_no: 45, team_name: '빅데이터육상', event_no: 5, dept_no: 9 },

    { team_no: 46, team_name: '사회복지축구', event_no: 1, dept_no: 10 },
    { team_no: 47, team_name: '사회복지농구', event_no: 2, dept_no: 10 },
    { team_no: 48, team_name: '사회복지피구', event_no: 3, dept_no: 10},
    { team_no: 49, team_name: '사회복지발야구', event_no: 4, dept_no: 10 },
    { team_no: 50, team_name: '사회복지육상', event_no: 5, dept_no: 10 },

    { team_no: 51, team_name: '상담심리축구', event_no: 1, dept_no: 11 },
    { team_no: 52, team_name: '상담심리농구', event_no: 2, dept_no: 11 },
    { team_no: 53, team_name: '상담심리피구', event_no: 3, dept_no: 11 },
    { team_no: 54, team_name: '상담심리발야구', event_no: 4, dept_no: 11 },
    { team_no: 55, team_name: '상담심리육상', event_no: 5, dept_no: 11 },

    { team_no: 56, team_name: '식품영양축구', event_no: 1, dept_no: 12 },
    { team_no: 57, team_name: '식품영양농구', event_no: 2, dept_no: 12 },
    { team_no: 58, team_name: '식품영양피구', event_no: 3, dept_no: 12 },
    { team_no: 59, team_name: '식품영양발야구', event_no: 4, dept_no: 12 },
    { team_no: 60, team_name: '식품영양육상', event_no: 5, dept_no: 12 },

    { team_no: 61, team_name: '신학축구', event_no: 1, dept_no: 13 },
    { team_no: 62, team_name: '신학농구', event_no: 2, dept_no: 13 },
    { team_no: 63, team_name: '신학피구', event_no: 3, dept_no: 13 },
    { team_no: 64, team_name: '신학발야구', event_no: 4, dept_no: 13 },
    { team_no: 65, team_name: '신학육상', event_no: 5, dept_no: 13 },

    { team_no: 66, team_name: '아트앤디자인축구', event_no: 1, dept_no: 14 },
    { team_no: 67, team_name: '아트앤디자인농구', event_no: 2, dept_no: 14 },
    { team_no: 68, team_name: '아트앤디자인피구', event_no: 3, dept_no: 14 },
    { team_no: 69, team_name: '아트앤디자인발야구', event_no: 4, dept_no: 14 },
    { team_no: 70, team_name: '아트앤디자인육상', event_no: 5, dept_no: 14 },

    { team_no: 71, team_name: '약학축구', event_no: 1, dept_no: 15 },
    { team_no: 72, team_name: '약학농구', event_no: 2, dept_no: 15 },
    { team_no: 73, team_name: '약학피구', event_no: 3, dept_no: 15 },
    { team_no: 74, team_name: '약학발야구', event_no: 4, dept_no: 15 },
    { team_no: 75, team_name: '약학육상', event_no: 5, dept_no: 15 },

    { team_no: 76, team_name: '영어영문축구', event_no: 1, dept_no: 16 },
    { team_no: 77, team_name: '영어영문농구', event_no: 2, dept_no: 16 },
    { team_no: 78, team_name: '영어영문피구', event_no: 3, dept_no: 16 },
    { team_no: 79, team_name: '영어영문발야구', event_no: 4, dept_no: 16 },
    { team_no: 80, team_name: '영어영문육상', event_no: 5, dept_no: 16 },

    { team_no: 81, team_name: '유아교육축구', event_no: 1, dept_no: 17 },
    { team_no: 82, team_name: '유아교육농구', event_no: 2, dept_no: 17 },
    { team_no: 83, team_name: '유아교육피구', event_no: 3, dept_no: 17 },
    { team_no: 84, team_name: '유아교육발야구', event_no: 4, dept_no: 17 },
    { team_no: 85, team_name: '유아교육육상', event_no: 5, dept_no: 17 },

    { team_no: 86, team_name: '음악학축구', event_no: 1, dept_no: 18 },
    { team_no: 87, team_name: '음악학농구', event_no: 2, dept_no: 18 },
    { team_no: 88, team_name: '음악학피구', event_no: 3, dept_no: 18 },
    { team_no: 89, team_name: '음악학발야구', event_no: 4, dept_no: 18 },
    { team_no: 90, team_name: '음악학육상', event_no: 5, dept_no: 18 },

    { team_no: 91, team_name: '인공지능융합축구', event_no: 1, dept_no: 19 },
    { team_no: 92, team_name: '인공지능융합농구', event_no: 2, dept_no: 19 },
    { team_no: 93, team_name: '인공지능융합피구', event_no: 3, dept_no: 19 },
    { team_no: 94, team_name: '인공지능융합발야구', event_no: 4, dept_no: 19 },
    { team_no: 95, team_name: '인공지능융합육상', event_no: 5, dept_no: 19 },

    { team_no: 96, team_name: '체육학축구', event_no: 1, dept_no: 20 },
    { team_no: 97, team_name: '체육학농구', event_no: 2, dept_no: 20 },
    { team_no: 98, team_name: '체육학피구', event_no: 3, dept_no: 20 },
    { team_no: 99, team_name: '체육학발야구', event_no: 4, dept_no: 20 },
    { team_no: 100, team_name: '체육학육상', event_no: 5, dept_no: 20 },
    
    { team_no: 101, team_name: '컴퓨터공학축구', event_no: 1, dept_no: 21 },
    { team_no: 102, team_name: '컴퓨터공학농구', event_no: 2, dept_no: 21 },
    { team_no: 103, team_name: '컴퓨터공학피구', event_no: 3, dept_no: 21 },
    { team_no: 104, team_name: '컴퓨터공학발야구', event_no: 4, dept_no: 21 },
    { team_no: 105, team_name: '컴퓨터공학육상', event_no: 5, dept_no: 21 },

    { team_no: 106, team_name: '항공관광외국어축구', event_no: 1, dept_no: 22 },
    { team_no: 107, team_name: '항공관광외국어농구', event_no: 2, dept_no: 22 },
    { team_no: 108, team_name: '항공관광외국어피구', event_no: 3, dept_no: 22 },
    { team_no: 109, team_name: '항공관광외국어발야구', event_no: 4, dept_no: 22 },
    { team_no: 110, team_name: '항공관광외국어육상', event_no: 5, dept_no: 22 },

    { team_no: 111, team_name: '화학생명축구', event_no: 1, dept_no: 23 },
    { team_no: 112, team_name: '화학생명농구', event_no: 2, dept_no: 23 },
    { team_no: 113, team_name: '화학생명피구', event_no: 3, dept_no: 23 },
    { team_no: 114, team_name: '화학생명발야구', event_no: 4, dept_no: 23 },
    { team_no: 115, team_name: '화학생명육상', event_no: 5, dept_no: 23 },

    { team_no: 116, team_name: '환경디자인원예축구', event_no: 1, dept_no: 24 },
    { team_no: 117, team_name: '환경디자인원예농구', event_no: 2, dept_no: 24},
    { team_no: 118, team_name: '환경디자인원예피구', event_no: 3, dept_no: 24 },
    { team_no: 119, team_name: '환경디자인원예발야구', event_no: 4, dept_no: 24 },
    { team_no: 120, team_name: '환경디자인원예육상', event_no: 5, dept_no: 24 },


];


const match_table = [
    { match_no: 11, t1_score: null, t2_score: null, match_st: '2024-03-12 17:30:00', match_state: '예정' },
    { match_no: 10, t1_score: null, t2_score: null, match_st: '2024-03-11 15:00:00', match_state: '예정' },
    { match_no: 9, t1_score: null, t2_score: null, match_st: '2024-03-10 12:00:00', match_state: '예정' },
    { match_no: 8, t1_score: 1, t2_score: 0, match_st: '2024-03-09 17:30:00', match_state: '진행 중' },
    { match_no: 7, t1_score: 2, t2_score: 3, match_st: '2024-03-09 17:00:00', match_state: '진행 중' },
    { match_no: 6, t1_score: 1, t2_score: 2, match_st: '2024-03-08 13:00:00', match_state: '종료' },
    { match_no: 5, t1_score: 3, t2_score: 2, match_st: '2024-03-08 13:00:00', match_state: '종료' },
    { match_no: 4, t1_score: 1, t2_score: 0, match_st: '2024-03-07 15:00:00', match_state: '종료' },
    { match_no: 3, t1_score: 2, t2_score: 4, match_st: '2024-03-07 14:00:00', match_state: '종료' },
    { match_no: 2, t1_score: 3, t2_score: 5, match_st: '2024-03-06 18:00:00', match_state: '종료' },
    { match_no: 1, t1_score: 4, t2_score: 2, match_st: '2024-03-06 10:00:00', match_state: '종료' },
];

const play = [
    { team1_no: 1, team2_no: 11, match_no: 11 },
    { team1_no: 22, team2_no: 27, match_no: 10 },
    { team1_no: 98, team2_no: 63, match_no: 9 },
    { team1_no: 69, team2_no: 74, match_no: 8 },
    { team1_no: 76, team2_no: 81, match_no: 7 },
    { team1_no: 91, team2_no: 46, match_no: 6 },
    { team1_no: 4, team2_no: 109, match_no: 5 },
    { team1_no: 101, team2_no: 66, match_no: 4 },
    { team1_no: 22, team2_no: 12, match_no: 3 },
    { team1_no: 1, team2_no: 81, match_no: 2 },
    { team1_no: 26, team2_no: 96, match_no: 1 },
];

const comment = [
    { cmt_no: 1, content: '댓글 내용', time: '2024-03-10 12:00:00', match_no: 1 },
];

const livechat = [
    { chat_no: 1, content: '채팅 내용', time: '2024-03-10 12:00:00', match_no: 1 },
];


// 안되는데?
export {
    event,
    department,
    team,
    match_table,
    play
    // 나머지 ...
};