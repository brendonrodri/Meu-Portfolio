import React from "react"
import Todoflix from "../Assets/Todoflix.png"
import Tasklist from "../Assets/tasklist.png"
import Recipes from "../Assets/Recipes.png"
import FooterComponent from "../Footer/index"
import Carousel from 'react-bootstrap/Carousel'
import * as S from "../styles"
export default function WorksComponent(){
    return( 
        <>
            <S.CarouselContainer>
            <Carousel  >
                <Carousel.Item>
                    <a href="">
                        <img
                        className="d-block w-100"
                        src={Todoflix}
                    />
                    </a>
                   
                   <div>
                        <h3>ToDoFLix</h3>
                        <p>Catálogo de filmes interativo</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <a href="">
                        <img
                        className="d-block w-100"
                        src={Tasklist}
                    />
                    </a>
                    <div>
                        <h3>TaskList</h3>
                        <p>Um app para organizar suas tarefas</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <a href="">   
                        <img
                        className="d-block w-100"
                        src={Recipes}
                        />
                    </a>
                    <div>
                        <h3>Recipes</h3>
                        <p>Um belo catálogo de receitas</p>
                    </div>
                </Carousel.Item>
                </Carousel>
        </S.CarouselContainer>
      
        </>
        
            
        
    )
}