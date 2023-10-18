import styles from "../styles/Home.module.css";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,

} from "@material-ui/core";
import Image from "next/image";

import { useState } from "react";
import img1 from "../public/pic1.png";
import img2 from "../public/pic2.png";

import { useRouter } from "next/router";

export default function Home() {

  const [show1, setShow1] = useState(true);
 
  const [show3, setShow3] = useState(true);
  const router=useRouter();
 
  const changeState = () => {
    setShow1(false);
    
    setShow3(false);
  };
  return (
    <div className={styles.container}>
      <p
        p={2}
        sx={{ fontsize: "solid", paddingLeft: "30px" }}
        variant="h6"
      >
        Courses(2)
      </p>
      <br />
      <Divider />
      <br />
      <div p={4} style={{ display: "flex" }}>
        {show3 && (
          <div onClick={changeState} style={{ marginRight: "15px" }}>
            <Card sx={{ maxWidth: 345 }} onClick={()=>router.push('/furlongCourses/Main')}>
              <CardActionArea>
                <CardMedia>
                  <Image
                    src={img1}
                    alt=""
                    objectFit="contain" 
                  />
                </CardMedia>
                <CardContent>
                  <p
                    
                    variant="p"
                    style={{ color: "blue" }}
                    component="div"
                  >
                    Furlong Painting Sub Contractor/Worker Induction
                  </p>
                  <p variant="subtitle2" color="text.secondary">
                    Tony Bruce
                  </p>

                  <p  variant="p" component="div">
                    Enrolled Learners: <span style={{ color: "blue" }}>24</span>
                  </p>
                  <p
                    style={{ textAlign: "right" }}
                    variant="subtitle2"
                    color="text.secondary"
                  >
                    2 years ago
                  </p>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        )}

        {show1 && (
          <div onClick={changeState} style={{ marginRight: "15px" }}>
            <Card style={{ maxWidth: 345 }} onClick={()=>router.push('/furlongCourses/ContractorInductionProgram')}>
              <CardActionArea>
                <CardMedia>
                  <Image
                    src={img2}
                    alt=""
                    objectFit="contain" // or objectFit="cover"
                  />
                </CardMedia>

                <CardContent>
                  <p
                    
                    variant="p"
                    style={{ color: "blue" }}
                    component="div"
                  >
                    Furlong Painting Contractor Induction Program
                  </p>
                  <p variant="subtitle2" color="text.secondary">
                    Tony Bruce
                  </p>

                  <p  variant="p" component="div">
                    Enrolled Learners: <span style={{ color: "blue" }}>9</span>
                  </p>
                  <p
                    style={{ textAlign: "right" }}
                    variant="subtitle2"
                    color="text.secondary"
                  >
                    2 years ago
                  </p>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        )}  
      </div>
      <br />
         </div>
  );
}
