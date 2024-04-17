import * as ModalST from './ModalStyle'

export default function CautionModal({setIsBlank, modalMsg}) {

    return (
        <ModalST.Overlay>
            <ModalST.ModalBox>
                <ModalST.Modalname>
                    <ModalST.ModalnameBlank/>
                    {modalMsg}
                </ModalST.Modalname>
                <ModalST.Option onClick={()=>{setIsBlank(false)}}>확인</ModalST.Option>
            </ModalST.ModalBox>
        </ModalST.Overlay>
    )
}