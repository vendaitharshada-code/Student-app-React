import React,{useState,useEffect} from "react";
function App()
{
    const [count,setCount]=useState(0);

    useEffect(()=>{
        console.log("Counter Updated:",count);
    },[count]);

    const [marks,setMarks]=useState({
        sub1:" ",
        sub2:" ",
        sub3:" "
    });

    const [total,setTotal]=useState(0);
     const [percentage,setPercentage]=useState(0);
      const [grade,setGrade]=useState(" ");

      useEffect(()=>{
        const s1=Number(marks.sub1);
        const s2=Number(marks.sub2);
        const s3=Number(marks.sub3);

        const totalMarks=s1+s2+s3;
        const per=totalMarks/3;

        setTotal(totalMarks);
        setPercentage(per);

        if(per>=80) setGrade("A");
        else if(per>=60) setGrade("B") ;
         else if(per>=40) setGrade("C") ;
          else  setGrade("Fail") ;
      },[marks]);

      const [likes,setLikes]=useState(0);
      useEffect(()=>{
        console.log("Likes Updated:",likes);
      },[likes]);

      const [rating,setRating]=useState(0);
      useEffect(()=>{
        console.log("Rating Selected:",rating);
      },[rating]);

      return(
        <div style={{padding:"20px"}}>
            <h2>useEffect Demo</h2>

            <h3>Counter</h3>
            <p>Count:{count}</p>
            <button onClick={()=>setCount(count+1)}>Increase</button>
            <hr/>

            <h3>Student Marks</h3>
            <input type="number" placeholder="sub 1" onChange={(e)=>setMarks({marks,sub1:e.target.value})}></input>
            <input type="number" placeholder="sub 2" onChange={(e)=>setMarks({marks,sub2:e.target.value})}></input>
             <input type="number" placeholder="sub 3" onChange={(e)=>setMarks({marks,sub3:e.target.value})}></input>

             <p>Total:{total}</p>
             <p>Percentage:{percentage}%</p>
             <p>Grade:{grade}</p>
             <hr/>

             <h3>Like</h3>
             <p>Likes:{likes}</p>
             <button onClick={()=>setLikes(likes+1)}></button>
             <hr/>

             <h3>Rating</h3>
             <p>Selected Rating:{rating}</p>
             <button onClick={()=>setRating(1)}>1</button>
              <button onClick={()=>setRating(2)}>2</button>

 <button onClick={()=>setRating(3)}>3</button>

 <button onClick={()=>setRating(4)}>4</button>

 <button onClick={()=>setRating(5)}>5</button>


             
            
        </div>
      )


}