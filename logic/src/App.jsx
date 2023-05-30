import Like from './components/Like';
import Car from './components/Car';
import ToDo from './components/ToDo';
import Buy from './components/ShoppingCar';
import Grade from './components/grade';
import Imc from './components/Imc';
import Weather from './components/Weather';
import Password from './components/password';
import Theme from './components/Theme';
import Form from './components/Form';
import Toggle from './components/passwordHidden';
import CharacterCounter from './components/counter';
import ClickCounter from './components/clicks';
import OptionSelector from './components/option';
import MessageInput from './components/message';

import './App.css';


const images = {
  imc: require('./components/images/tabla-IMC-624x411.webp'),
  cold: require('./components/images/cual-dia-mas-frio-ano-esta-fecha-exacta_98.webp')
}


const chores = ['do homework', 'train', 'go out with friends'];
const grades = [5.0,5.0,3.5,2.0]

function App() {
  return (
    <div className="App">
      <Like/>
      <Car/>
      <ToDo  options={chores} />
      <Buy />
      <Grade grades={grades}/>
      <Imc height={1.80} weight={83} image={images.imc}/>
      <Weather sunnyImage={images.cold} coldImage={images.imc} />
      <Password />
      <Theme />
      <Form />
      <Toggle/>
      <CharacterCounter />
      <ClickCounter />
      <OptionSelector/>
      <MessageInput />
    </div>
  );
}

export default App;
