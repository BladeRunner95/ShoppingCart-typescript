import {Button} from "@material-ui/core";
//Types
import { CartItemType } from '../../App';
// styles
import { Wrapper } from "./Item.styled";


type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
}

export const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
    <Wrapper>
        <img src={item.image} alt={item.title} />
        <div></div>
    </Wrapper>
    )
