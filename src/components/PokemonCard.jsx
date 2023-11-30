import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import './PokemonList.css';
import { StarOutlined } from '@ant-design/icons';

const PokemonCard = ({ name }) => {
    return (
    <Card 
    title={name}
    cover={<img src='https://c0.klipartz.com/pngpicture/419/447/gratis-png-bulbasaur-de-pokemon-illustration-pokemon-ir-pokemon-pikachu-ash-ketchum-bulbasaur-pokemon.png'
    alt='bulbasur' />}
    extra={<StarOutlined />}
    >
        <Meta description="grass, poison" />
    </Card>
    )
}

export default PokemonCard;