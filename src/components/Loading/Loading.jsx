import './Loading.css'
import loadingImg from '/images/loading.gif'

function Loading() {
    return (
        <div className='loadingBar'>
            <img src={loadingImg} alt="" />
        </div>
    )
}

export default Loading
