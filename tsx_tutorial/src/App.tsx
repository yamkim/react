import React from 'react';
import { SampleProvider } from './components/ContextSample';
import Counter from './components/Counter';
import Greetings from './components/Greetings';
import MyForm from './components/MyForm';
import ReducerSample from './components/ReducerSample';

const App: React.FC = () => {
  // const onClick = (name: string) => {
  //   console.log(`${name} says hello`);
  // }
  // return <Greetings name="Hello" onClick={onClick}/>;

  // return <Counter />

  // const onSubmit = (form: { name: string; description: string }) => {
  //   console.log(form);
  // };
  // return <MyForm onSubmit={onSubmit}/>

  // return <ReducerSample />;
  return (
    <SampleProvider>
      <ReducerSample />
    </SampleProvider>
  )
};

export default App;