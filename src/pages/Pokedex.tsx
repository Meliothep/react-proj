import React, {useEffect,useState,useCallback} from "react";
import Header from "../components/header";
import PokemonCard, { PokemonCardProps } from "../components/pokemon/PokemonCard";
import { Row, Col, Button } from 'reactstrap';
const limite = 28


const Pokedex = () : JSX.Element => {
    const [items, setItems] = useState<PokemonCardProps[]>([])
    // disclaimer ceci est le SEUL MOYEN D'obtenir un forceUpdate puisque le setItems re-render PAS 
    const [, updateState] = useState<Object>();
    const forceUpdate = React.useCallback(() => updateState({}), []);
    // fin disclaimer 
    const getPokemons = () => {
        var init = items.length
        for(var i = init+1; i <= init + limite ; i++){
          items.push({
            id : i,
            liked : false
          })
        }
        return items 
      }

    const buttonListener = ()=>{
        setItems(getPokemons())
        forceUpdate()
        console.log(items.length)
    }
    
    if(items.length == 0){
        getPokemons()
    }
    
    return (
        <div className="pokedex">
            <Header></Header>
            <div className="center-container">
                <h1>Click to add to your collection</h1>
            </div>
            <div className="card-container"> 
                <Row className="gridRows" xs={4}>
                    {
                        items.map((object : PokemonCardProps, i) => {
                            return (<Col key={i} onClick={()=>{
                                items[object.id-1].liked = !items[object.id-1].liked
                                setItems(items)
                                forceUpdate()
                            }}> <PokemonCard id={object.id} liked={object.liked}></PokemonCard> </Col>)
                        })
                    }
                </Row>
            </div>
                
            <div className="center-container">
                <Button color="primary" onClick={buttonListener} >Load More !</Button>{' '}
            </div>
        </div>
    );
} ;

export default Pokedex;