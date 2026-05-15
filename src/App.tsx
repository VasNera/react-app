// import FunctionalComponent   from "./components/LessonTwo/FunctionalComponent.tsx";
// import ClassComponent from "./components/LessonTwo/ClassComponent.tsx";
// import ArrowFunctionalComponent from "./components/LessonTwo/ArrowFunctionalComponent.tsx";

// type PropsA = {
//     title: string;
//     description: string;
// }
//
// type PropsB = {
//     title: string;
//     description: string;
// }
//
//
// // Union
// type Status = "Error" | "Info" | "Warning";
//
// // Tuples
// type Coordinates = [number, number];
//
// //Functions
// type ClickHandler = (event: MouseEvent) => void;
//
// //Intersection
//
// type Props = PropsA & PropsB;
//
// interface PropsTwo {
//     title: string;
//     description: string;
// }
//
// interface PropsTwo {
//     price: number,
//     sort: number;
// }
//
// //PropsTwo = {title, description, price,sort}
//
// interface PropsThree extends PropsTwo {
//     image: string,
// }

//propsThree = {title, description,price,sort,image}

//import ArrowFunctionalComponentWithProps from "./components/LessonThree/ArrowFunctionalComponentWithProps.tsx";
import Layout from "./components/Layout.tsx";
import Counter from "./components/LessonFour/Counter.tsx";
// import ClassCounter from "./components/LessonFour/ClassCounter.tsx";

function App() {

  return (
    <>
        {/*<FunctionalComponent />*/}
        {/*<ClassComponent />*/}
        {/*<ArrowFunctionalComponent />*/}

        {/*<ArrowFunctionalComponentWithProps title="Heading 1"/>*/}
        {/*<ArrowFunctionalComponentWithProps*/}
        {/*    title="Second Title"*/}
        {/*    description="This is the description for second title"*/}
        {/*/>*/}

        <Layout addClasses="bg-gray-50">
            {/*<ArrowFunctionalComponentWithProps*/}
            {/*    title="Second Title"*/}
            {/*    description="This is the description for second title"*/}
            {/*/>*/}
            {/*<p className="text-red-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, voluptas!*/}
            {/*</p>*/}
            <Counter/>
            {/*<ClassCounter/>*/}
        </Layout>

      </>
  )
}

export default App
