import { useState } from "react";
import "./todolist.css"
export default function Add_to_list() {
    const[mytask,setmytask]=useState("")
    const [myid,Setid]=useState(0)
    const [mylist,Setmylist]=useState([])
//-------------------------------------------
        const onChangelist=()=>{
           let task=document.getElementById("inputTask").value 
          setmytask(task)
        }
//-------------------------------------------
        const addTask=()=>{
          Setid((prv)=>prv+1)
          let datatask={
            nametask:mytask,
            id:myid
          }
           Setmylist([...mylist,datatask])
           
        }
//-------------------------------------------
        const remplir_list=()=>{
            return mylist.map((tas)=>{
              return <div className="cadre">
              <div className="cadre_task" onClick={finish_task} title="click if you have completed this task" key={tas.id} >
              <i class="fa-solid fa-check" id="checkk"></i>   {tas.nametask}
              </div>
              <button className="btn_Remove" onClick={()=>remove_task(tas.id)}><i id="delete" class="fa-solid fa-trash-can"></i></button>
              </div>
            })
        }
//-------------------------------------------
        const remove_task=(idd)=>{
            const new_list=mylist.filter((element)=>element.id != idd)
            Setmylist(new_list)
        }
//-------------------------------------------
const finish_task = (e) => {
  const cadreTask = e.target;
  const checkk = cadreTask.querySelector("#checkk");



  const isBlack =   cadreTask.style.backgroundColor === "rgb(52, 52, 52)"; 
  const isGray = cadreTask.style.color === "grey"; 
  

  cadreTask.style.backgroundColor = isBlack ? "#4d4d4d" : "rgb(52, 52, 52)";
  cadreTask.style.color = isGray ? "rgb(28, 187, 134)" : "grey";


  checkk.style.display = isBlack ? "none" : "block";
};


//-------------------------------------------

    return  <div className="container">
      <div className="titre"><i id="logo_list"className="fa-solid fa-list-ul" ></i>TODO LIST</div>
      <div className="Btn_Input">
      <input type="text" onChange={onChangelist}  id="inputTask" placeholder="Add your Task ..." maxlength="20"/>
          <button className="btnAjouter" onClick={addTask}>ADD</button>
      </div>
          <div >
                {remplir_list()}
          </div>
    </div>

}



