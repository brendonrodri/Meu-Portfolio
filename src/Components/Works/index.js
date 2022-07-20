import React, {useEffect, useState} from "react"
import Todoflix from "../Assets/Todoflix.png"
import Tasklist from "../Assets/tasklist.png"
import Recipes from "../Assets/Recipes.png"
import Agenda from "../Assets/AgendaBairro.png"
import Carousel from 'react-bootstrap/Carousel'
import * as S from "../styles"
export default function WorksComponent(){
    const [width, setWidth] =useState(window.innerWidth);
    const breakpoint = 700;
    useEffect(()=>{
        const handleResizeWindow = () => setWidth(window.innerWidth);
        window.addEventListener("resive", handleResizeWindow);
        return()=>{
            window.removeEventListener("resize", handleResizeWindow);
        };
    },[]);
    if (width> breakpoint){
        return(
            <WorksDesktop />
        )
    }
    return(
        <WorksMobile />
    )
}
export function WorksDesktop(){
    return( 
        <>
            <S.CarouselContainer>
                <Carousel>
                    <Carousel.Item>
                        <a href="https://ueefgv.csb.app/" >
                            <img
                            className="d-block w-100"
                            src={Todoflix}
                            alt="Página de filmes"
                        />
                        </a>
                    <div>
                            <h3>ToDoFLix</h3>
                            <p>Catálogo de filmes interativo</p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="https://0pg67b.csb.app/" >
                            <img
                            className="d-block w-100"
                            src={Tasklist}
                            alt="Página de lista de tarefas"
                        />
                        </a>
                        <div>
                            <h3>TaskList</h3>
                            <p>Um app para organizar suas tarefas</p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="https://agendaparadaangelica2030.netlify.app/.netlify.app">   
                            <img
                            className="d-block w-100"
                            src={Agenda}
                            alt="Página de objetivos de desenvolvimento sustentável"
                            />
                        </a>
                        <div>
                            <h3>Agenda Parada Angélica 2030</h3>
                            <p>Agenda de objetivos sustentáveis para meu bairro</p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="https://veggrecipes.netlify.app">   
                            <img
                            className="d-block w-100"
                            src={Recipes}
                            alt="Página de receitas"
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
    );
}
export function WorksMobile(){
    const [works, setWorks] = useState([
        {
            work: "ToDoFlix",
            desc: "Catálogo de filmes interativos",
            img: Todoflix,
            link: "https://ueefgv.csb.app/"
        },
        {
            work: "Agenda Parada Angélica",
            desc: "Agenda de objetivos sustentáveis",
            img: Agenda,
            link: "https://agendaparadaangelica2030.netlify.app/.netlify.app"
        },
        {
            work: "Task List",
            desc: "Um app para organizar suas tarefas",
            img: Tasklist,
            link: "https://0pg67b.csb.app/"
        },
        
        {
            work: "Recipes",
            desc: "Um belo catálogo de receitas",
            img: Recipes,
            link: "https://veggrecipes.netlify.app"
        }
       
    ])
    useEffect(()=>{
        setWorks()
    },[])
    return(
        <>
            <S.MobileWorksList>
                {works.map((item)=>(
                    <S.WorksMobileBox>
                        <h3><a href={item.link} >{item.work}</a></h3>
                        <p>{item.desc}</p>
                        <a href={item.link} ><img src={item.img} alt="imagem"/></a>
                                          
                    </S.WorksMobileBox>
                ))}
            </S.MobileWorksList>
        </>
    )
}
