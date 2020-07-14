import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useParams,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> {}
        <Link to="/launch">Launch</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="launch" element={<Launch />}>
          <Route path="/" element={<LaunchIndex />} />
          <Route path=":slug" element={<LaunchShoe />} />
        </Route>
      </Routes>
    </Router>
  );
}

function LaunchShoe() {
 const {slug} = useParams();
 const shoe = shoes[slug];

  return (<div>
    <h1>{shoe.name}</h1>
    <img src={shoe.imgfull} alt={shoe.name} />
    </div>
    );
}

function LaunchIndex() {
  return (
    <ul>
      {Object.entries(shoes).map(([slug, { name, imgthumb, imgfull }]) => (
        <li key={slug}>
          <Link to={`/launch/${slug}`}>
            <h2>{name}</h2>
            <img src={imgthumb} alt={name} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

function Home() {
  return (
    <div>
      <h1>Hello Home</h1>
    </div>
  );
}

function Launch() {
  return (
    <div>
      <h1>Hello Launch</h1>
      <Outlet />
    </div>
  );
}

const shoes = {
  "air-zoom-pegasus-37-running-shoe-Z7QV8FBQ9646-001": {
    name: "Nike Air Zoom Pegasus 37",
    imgthumb:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e8aa7537-5848-4418-9ab4-1ff9cc27c17c/air-zoom-pegasus-37-running-shoe-Z7QV8F.jpg",
    imgfull:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/33201b0e-8971-45eb-b91b-edac41535f5a/air-zoom-pegasus-37-running-shoe-Z7QV8F.jpg",
  },
  "air-max-90-se-shoe-MBLJCt": {
    name: "air-max-90-se-shoe-MBLJCt/CK7069-100",
    imgthumb:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/77baf9e5-ea95-4645-b577-78af79e8bef1/air-max-90-se-shoe-MBLJCt.jpg",
      imgfull:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/77baf9e5-ea95-4645-b577-78af79e8bef1/air-max-90-se-shoe-MBLJCt.jpg",
  },
  "air-max-200-shoe-7HGW5r": {
    name: "Nike Air Max 200",
    imgthumb:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1d22ae72-5391-4276-b069-dbfe8fe4d1de/air-max-200-shoe-006VDw.jpg",
      imgfull:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/hgbpzfmbp3khk7m7nwji/air-max-200-shoe-7HGW5r.jpg",
  },
};
