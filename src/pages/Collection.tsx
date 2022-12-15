import React, {useState} from "react";
import Header from "../components/header";
import { RootState } from "../store";
import { useSelector, useDispatch } from 'react-redux';
import PokemonCard from "../components/pokemon/PokemonCard";
import { Row, Col, Button } from 'reactstrap';
import { unlikeCard } from "../features/pokemon.slice";

const Collection = () => {
    const likedItems = useSelector<RootState,Array<number>>((state) => state.pokemons.likedpokemons)
    const dispatch = useDispatch();
    // disclaimer ceci est le SEUL MOYEN D'obtenir un forceUpdate puisque le setItems re-render PAS 
    const [, updateState] = useState<Object>();
    const forceUpdate = React.useCallback(() => updateState({}), []);
    // fin disclaimer 


    const buttonListener = ()=>{
        forceUpdate()
    }
    
    return (
        <div className="pokedex">
            <Header></Header>
            <div className="center-container">
                <h1>Click to remove from your collection</h1>
            </div>
            <div className="card-container"> 
                <Row className="gridRows" xs={4}>
                    {
                        likedItems.map((id : number, i) => {
                            return (<Col key={i} onClick={()=>{
                                dispatch(unlikeCard(id))
                                forceUpdate()
                            }}> <PokemonCard id={id} liked={true}></PokemonCard> </Col>)
                        })
                    }
                </Row>
            </div>
                
            <div className="center-container">
                <Button color="primary" onClick={buttonListener} >Load More !</Button>{' '}
            </div>
        </div>
    );
};

export default Collection;