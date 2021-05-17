import React from 'react';
import ReactDOM from 'react-dom';
import Home from "./Home";
import { Card, Courses, Teachers } from "./Courses";
import Login from "./Login";
import { Type1Data, Type2Data, Type3Data, Fac1Data, Fac2Data, Fac3Data } from "./Data";

// By default
ReactDOM.render(
  <Home />,
  document.getElementById('page')
);


//Renders home content
document.getElementById('nav-home').addEventListener('click', () => {
  ReactDOM.render(
    <Home />,
    document.getElementById('page')
  );
});

document.getElementById('heading').addEventListener('click', () => {
  ReactDOM.render(
    <Home />,
    document.getElementById('page')
  );
});

document.getElementById('footer-home').addEventListener('click', () => {
  ReactDOM.render(
    <Home />,
    document.getElementById('page')
  );
});


//renders course content
document.getElementById('nav-courses').addEventListener('click', () => {
  ReactDOM.render((<Courses />), document.getElementById('page'));
  document.getElementById("type-1").addEventListener('click', () => {

    ReactDOM.render((
      <>

        {Type1Data.map((val) => {
          return (<Card
            imgsrc={val.imgsrc}
            coursename={val.coursename}
            desc={val.desc}
            price={val.price} />);
        })}

      </>
    ), document.getElementById('course-detail'));

    ReactDOM.render((
      <>
        <br />
        <br />
        <center><hr width="100%" color="white" /></center>
        <br />
        <h2>Faculty</h2>
        <br />
        <center><hr width="100%" color="white" /></center>
        <br />
        <br />
      </>
    ), document.getElementById('fac-head'));

    ReactDOM.render((
      <>
        {
          Fac1Data.map((val) => {
            return (<Teachers image={val.image} name={val.name} qual={val.qual} />);
          })
        }
      </>
    ), document.getElementById('fac-detail'));
  });

  document.getElementById("type-2").addEventListener('click', () => {

    ReactDOM.render((
      <>

        {Type2Data.map((val) => {
          return (<Card
            imgsrc={val.imgsrc}
            coursename={val.coursename}
            desc={val.desc}
            price={val.price} />);
        })}
      </>
    ), document.getElementById('course-detail'));

    ReactDOM.render((
      <>
        <br />
        <br />
        <center><hr width="100%" color="white" /></center>
        <br />
        <h2>Faculty</h2>
        <br />
        <center><hr width="100%" color="white" /></center>
        <br />
        <br />
      </>
    ), document.getElementById('fac-head'));

    ReactDOM.render((
      <>
        {
          Fac2Data.map((val) => {
            return (<Teachers image={val.image} name={val.name} qual={val.qual} />);
          })
        }
      </>
    ), document.getElementById('fac-detail'));
  });

  document.getElementById("type-3").addEventListener('click', () => {

    ReactDOM.render((
      <>

        {Type3Data.map((val) => {
          return (<Card
            imgsrc={val.imgsrc}
            coursename={val.coursename}
            desc={val.desc}
            price={val.price} />);
        })}

      </>
    ), document.getElementById('course-detail'));

    ReactDOM.render((
      <>
        <br />
        <br />
        <center><hr width="100%" color="white" /></center>
        <br />
        <h2>Faculty</h2>
        <br />
        <center><hr width="100%" color="white" /></center>
        <br />
        <br />
      </>
    ), document.getElementById('fac-head'));

    ReactDOM.render((
      <>
        {
          Fac3Data.map((val) => {
            return (<Teachers image={val.image} name={val.name} qual={val.qual} />);
          })
        }
      </>
    ), document.getElementById('fac-detail'));
  });



});

document.getElementById('footer-course').addEventListener('click', () => {
  ReactDOM.render((<Courses />), document.getElementById('page'));
  document.getElementById("type-1").addEventListener('click', () => {

    ReactDOM.render((
      <>

        {Type1Data.map((val) => {
          return (<Card
            imgsrc={val.imgsrc}
            coursename={val.coursename}
            desc={val.desc}
            price={val.price} />);
        })}

      </>
    ), document.getElementById('course-detail'));

    ReactDOM.render((
      <>
        <br />
        <br />
        <center><hr width="100%" color="white" /></center>
        <br />
        <h2>Faculty</h2>
        <br />
        <center><hr width="100%" color="white" /></center>
        <br />
        <br />
      </>
    ), document.getElementById('fac-head'));

    ReactDOM.render((
      <>
        {
          Fac1Data.map((val) => {
            return (<Teachers image={val.image} name={val.name} qual={val.qual} />);
          })
        }
      </>
    ), document.getElementById('fac-detail'));
  });

  document.getElementById("type-2").addEventListener('click', () => {

    ReactDOM.render((
      <>

        {Type2Data.map((val) => {
          return (<Card
            imgsrc={val.imgsrc}
            coursename={val.coursename}
            desc={val.desc}
            price={val.price} />);
        })}
      </>
    ), document.getElementById('course-detail'));

    ReactDOM.render((
      <>
        <br />
        <br />
        <center><hr width="100%" color="white" /></center>
        <br />
        <h2>Faculty</h2>
        <br />
        <center><hr width="100%" color="white" /></center>
        <br />
        <br />
      </>
    ), document.getElementById('fac-head'));

    ReactDOM.render((
      <>
        {
          Fac2Data.map((val) => {
            return (<Teachers image={val.image} name={val.name} qual={val.qual} />);
          })
        }
      </>
    ), document.getElementById('fac-detail'));
  });

  document.getElementById("type-3").addEventListener('click', () => {

    ReactDOM.render((
      <>

        {Type3Data.map((val) => {
          return (<Card
            imgsrc={val.imgsrc}
            coursename={val.coursename}
            desc={val.desc}
            price={val.price} />);
        })}

      </>
    ), document.getElementById('course-detail'));

    ReactDOM.render((
      <>
        <br />
        <br />
        <center><hr width="100%" color="white" /></center>
        <br />
        <h2>Faculty</h2>
        <br />
        <center><hr width="100%" color="white" /></center>
        <br />
        <br />
      </>
    ), document.getElementById('fac-head'));

    ReactDOM.render((
      <>
        {
          Fac3Data.map((val) => {
            return (<Teachers image={val.image} name={val.name} qual={val.qual} />);
          })
        }
      </>
    ), document.getElementById('fac-detail'));
  });



});



// renders login content
document.getElementById('nav-login').addEventListener('click', () => {
  ReactDOM.render(
    <Login />,
    document.getElementById('page')
  );
});

document.getElementById('footer-login').addEventListener('click', () => {
  ReactDOM.render(
    <Login />,
    document.getElementById('page')
  );
});


//helps in directing to signup section
document.getElementById('nav-signup').addEventListener('click', () => {
  ReactDOM.render(
    <Home />,
    document.getElementById('page')
  );
});

