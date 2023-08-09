import imageKarachaevsk from './img/karachaevsk.svg'
import imageElbrus from './img/elbrus.svg'
import imageDombay from './img/dombay.svg'

function Elements()
{
    let array =[imageKarachaevsk,imageElbrus,imageDombay,imageDombay,imageElbrus,imageKarachaevsk];
    return(

        <section className="elements">
            {
                array.map((item,index)=>{
                    return(
                        <div className="elements__element">
                            <img src={array[index]} alt="photo" className="elements__element-place"/>
                            <div className="elements__element-flex-row">
                                <p className="elements__element-text">Карачаевск</p>
                                <div className="elements__element-like">
                                </div>
                            </div>
                        </div>
                    )
            })
            }

        </section>
    )
}
export default Elements;