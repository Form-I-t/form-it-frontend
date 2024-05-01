import * as ModalST from './ModalStyle'
import { useNavigate } from 'react-router-dom'

export default function CancelModal({setIsModal}) {

    const navigate = useNavigate();

    return (
        <ModalST.Overlay>
            <ModalST.ModalZone>
                <ModalST.ModalIcon/>
                <ModalST.ModalBox>
                    <ModalST.Modalname>
                        모든 입력사항을 삭제하고 <br/>
                        이전 페이지로 이동하시겠습니까?
                    </ModalST.Modalname>

                    <ModalST.Option onClick={()=>{navigate(-1)}}>네</ModalST.Option>
                    <ModalST.BetterOption onClick={()=>{setIsModal(false)}}>아니요</ModalST.BetterOption>
                </ModalST.ModalBox>
            </ModalST.ModalZone>
        </ModalST.Overlay>
    )
}