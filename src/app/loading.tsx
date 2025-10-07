
import s from './Loading.module.scss'
export default function Loading(){
    return(
       <div className={s.overlay}>
      <div className={s.loader}></div>
    </div>
    )
}