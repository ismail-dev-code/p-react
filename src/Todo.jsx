// export default function Todo({task, isDone}){
//     return (
//         <div className="card">
//             <h3>Task: {task}</h3>
//         </div>
//     )
// }
// export default function Todo({task, isDone}){
//     if(isDone){
//         return <li>Done: {task}</li>
//     } else{
//         return <li>Pending: {task}</li>
//     }
// }
// export default function Todo({task, isDone}){
//     if(isDone){
//         return <li>Done: {task}</li>
//     } 
//         return <li>Pending: {task}</li>
    
// }
export default function Todo({task, isDone, time=5}){
    if(isDone){
        return <li>Done: {task} Duration: {time}</li>
    } 
        return <li>Pending: {task}</li>
    
}