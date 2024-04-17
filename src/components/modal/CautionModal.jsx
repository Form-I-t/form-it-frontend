import * as ModalST from './ModalStyle'
import SVG from '../imgs/SVG'

export default function CautionModal({setIsBlank, modalMsg}) {

    return (
        <ModalST.Overlay>
            <ModalST.ModalBox>
                <ModalST.Modalname>
                    <SVG name='Caution' size='18' color='var(--red-caution)'/>
                    {modalMsg}
                </ModalST.Modalname>
                <ModalST.Option onClick={()=>{setIsBlank(false)}}>확인</ModalST.Option>
            </ModalST.ModalBox>
        </ModalST.Overlay>
    )
}