import * as ModalST from './ModalStyle'

export default function CautionModal({setIsBlank, modalMsg}) {

    return (

        <ModalST.Overlay>
        <ModalST.ModalZone>
            <ModalST.ModalIcon/>
            <ModalST.CauModalBox>
                <ModalST.Modalname>
                    {modalMsg}
                </ModalST.Modalname>

                <ModalST.CauOption onClick={()=>{setIsBlank(false)}}>확인</ModalST.CauOption>
            </ModalST.CauModalBox>
        </ModalST.ModalZone>
        </ModalST.Overlay>
    )
}