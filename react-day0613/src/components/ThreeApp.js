// import React,{ useState } from "react";

// const ThreeApp = () => {

//     const [boards,setBoards]=useState([
//     {
//         no:1,
//         writer:'최재호',
//         subject:'배고픈데',
//         photo:'갈비립'
//     },
//     {
//         no:2,
//         writer:'최재호',
//         subject:'속이쓰리고',
//         photo:'감자볼'
//     },
//     {
//         no:3,
//         writer:'최재호',
//         subject:'배고픈데',
//         photo:'계란말이'
//     },
//     {
//         no:4,
//         writer:'최재호',
//         subject:'졸려',
//         photo:'김밥'
//     },
//     {
//         no:5,
//         writer:'최재호',
//         subject:'정부야 합의 좀 해라 개빡치니깐ㅡㅡ',
//         photo:'까르보나라'
//     },
//     {
//         no:6,
//         writer:'최재호',
//         subject:'집가고싶어',
//         photo:'냉면'
//     }
// ]);

//     return (
//         <div>
//             <h3 className = "alert alert-warning">ThreeApp 컴포넌트</h3>
//             <table className="table table-bordered" style={{width:'400px'}}>
//                 <caption><b>배열 객체 출력</b></caption>
//                 <thead>                 {/* thead,tbody를 쓰면 콜솔창에 에러 막 나오는거 없어짐 그래서 쓰는거 */}
//                     <tr style={{backgroundColor:'#ddd'}}>
//                         <th width='60'>번호</th>
//                         <th width='100'>사진</th>
//                         <th width='300'>제목</th>
//                         <th width='100'>작성자</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {           // 행데이타,index
//                         boards.map((row,index)=>(
//                             <tr key={index}>
//                                 <td>{row.no}</td>
//                                 <td>
//                                     <img alt="" src={`../image/${row.photo}.jpg`} style={{width:'60px'}}/>
//                                 </td>
//                                 <td>{row.subject}</td>
//                                 <td>{row.writer}</td>
//                             </tr>
//                         ))
//                     }
//                 </tbody>


//             </table>
//         </div>
//     )
// }

// export default ThreeApp;


import React,{ useState } from "react";

const ThreeApp = () => {

    const [boards,setBoards]=useState([
    {
        no:1,
        writer:'최재호',
        subject:'배고픈데',
        photo:'c1'
    },
    {
        no:2,
        writer:'최재호',
        subject:'속이쓰리고',
        photo:'c2'
    },
    {
        no:3,
        writer:'최재호',
        subject:'배고픈데',
        photo:'c3'
    },
    {
        no:4,
        writer:'최재호',
        subject:'졸려',
        photo:'c4'
    },
    {
        no:5,
        writer:'최재호',
        subject:'정부야 합의 좀 해라 개빡치니깐ㅡㅡ',
        photo:'c5'
    },
    {
        no:6,
        writer:'최재호',
        subject:'집가고싶어',
        photo:'c6'
    }
]);

    return (
        <div>
            <h3 className = "alert alert-warning">ThreeApp 컴포넌트</h3>
            <table className="table table-bordered" style={{width:'400px'}}>
                <caption><b>배열 객체 출력</b></caption>
                <thead>                 {/* thead,tbody를 쓰면 콜솔창에 에러 막 나오는거 없어짐 그래서 쓰는거 */}
                    <tr style={{backgroundColor:'#ddd'}}>
                        <th width='60'>번호</th>
                        <th width='100'>사진</th>
                        <th width='300'>제목</th>
                        <th width='100'>작성자</th>
                    </tr>
                </thead>
                <tbody>
                    {           // 행데이타,index
                        boards.map((row,index)=>(
                            <tr key={index}>
                                <td>{row.no}</td>
                                <td>
                                    <img alt="" src={`../image/${row.photo}.png`} style={{width:'60px'}}/>
                                </td>
                                <td>{row.subject}</td>
                                <td>{row.writer}</td>
                            </tr>
                        ))
                    }
                </tbody>


            </table>
        </div>
    )
}

export default ThreeApp;