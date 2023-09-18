import styled from "styled-components"
import weatherpic from "./components/weatherpic.png" 

function App() {


  return (
    <>
      <Header>
        <p className="title">Levo um casaquinho?</p>
        <div>
          <form action="">
            <input type="text" />
            <button>buscar</button>
          </form>
        </div>

      </Header>

      <WeatherBox>
        <div className="box">
          <div className="left">
            <span>Agora: Madrid</span>
            <p>maxima: 20ºC</p>
            <p>Minima: 13ºC</p>
          </div>
          <div className="right">
          <span>modelo</span>
            <p>18ºC</p>
          </div>

        </div>

        <img src={weatherpic} alt="graph" />


      </WeatherBox>



    </>
  )
}

export default App

const Header = styled.div`
margin-top: 30px;
 padding: 30px;
 background-color: brown;
 display: flex;
 flex-direction: column;
  align-items:center ;
  margin-bottom: 50px;
  .title{
   font-size: 40px;
   font-weight: 600;
  }
  
  form{
    input{
    height: 30px;
    width: 300px;
  }

  button{
    height: 35px;
  }
  }
  

 `

const WeatherBox = styled.div`
  background-color: gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  img{
    height: 300px;
    width: 700px;
  }
  .box{
   height: 150px;
    width: 800px;
    
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    
    .left{
     
      width: 300px;
      padding: 20px;
      span{
          font-size: 30px;
      }
      p{
        font-size: 18px;
      }
    }
    
    .right{
      padding: 20px;
      text-align: center;
     
      width: 300px;
      span{
        font-size: 20px;
      }
      p{
        margin-top: 10px;
        font-size: 60px;
      }
    }
    
  }
 `