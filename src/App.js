import './App.css';

import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaGooglePlusG } from "react-icons/fa6";
import { MdOutlineRoomService } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoWifi } from "react-icons/io5";

import n from './img/1.png';
import n1 from './img/2.jpeg';
import n2 from './img/3.jpeg';
import n3 from './img/4.jpeg';
import n4 from './img/5.jpeg';
import n5 from './img/6.jpeg';
import n6 from './img/7.jpeg';
import n7 from './img/8.png';
import n8 from './img/10.jpeg';
import n9 from './img/11.jpeg';
import n10 from './img/12.jpeg';
import n11 from './img/13.jpeg';
import n12 from './img/15.jpeg';
import n13 from './img/16.jpeg';
import n14 from './img/17.jpeg';
import n15 from './img/18.svg';
import n16 from './img/19.svg';
import n17 from './img/20.png';
import n18 from './img/21.png';
import n19 from './img/22.png';
import n20 from './img/23.png';
import n21 from './img/24.png';
import n22 from './img/25.png';
// import n12 from './img/14.jpeg';
function App() {
  return (

    <div className="main_class">

      {/* ------------heder--------------  */}
      <div className="heder">
        <div className="container">
          <div className="d-flex j-s mm">
            <div className="left_info">
              <ul>
                <li><a>info@Bilury.in</a></li>
              </ul>
            </div>
            <div className="center_info">
              <ul>
                <li><a>HAVE ANY QUESTION ? +91 56814 16003</a></li>
              </ul>
            </div>
            <div className="right_info">
              <ul className='d-flex'>
                <li><a><FaFacebook /></a></li>
                <li><a><BsTwitter /></a></li>
                <li><a><FaGooglePlusG /></a></li>
                <li><a>< FaLinkedinIn /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='navbar'>
        <div className='container'>
          <div className='d-flex j-s pp'>
            <div className='bot_left_info'>
              <div className='bot_img'>
                <img src={n}></img>

              </div>
            </div>
            <div className='bot_right_info d-flex'>
              <ul className='main_info d-flex'>
                <li><a>Home</a></li>
                <li><a>Rooms & Suites</a></li>
                <li><a>Tours</a></li>
                <li><a>Gallery</a></li>
                <li><a>Pages</a></li>

              </ul>
              <ul className='d-flex nn'>
                <li><a>En</a></li>
                <li><a>USD</a></li>
              </ul>
              <div className='btn'>
                <button><MdOutlineRoomService className='mm' />Reservation</button>

              </div>
              <CgProfile className='bb'></CgProfile>
            </div>
          </div>
        </div>
      </div>

      {/* ------------heder and-------------- */}

      {/* ---------------silder start----------- */}

      <div className='silder'>
        <img src={n1}></img>
      </div>

      {/* ------------------silder and----------------- */}

      {/* ------------welcome start------------- */}

      <div className='container kk w-50'>
        <div className='d-flex tt'>
          <div className='left_contain d-flex'>
            <div className='left_img'>
              <img src={n2}></img>
            </div>
            <div className='right_img'>
              <img src={n3}></img>
            </div>
          </div>
          <div className='right_conyain'>
            <h3>Welcome to</h3>
            <h1>Paris Bilury Hotel</h1>
            <p>Id vel nostrud maiorum, quo ad quidam perfecto. Mea justo dicta accusata no, te has aeque dolores repudiare, his etiam pericula id. Utinam quaestio philosophia eos in, eu eam offendit laboramus intellegebat, cu est quis officiis. Est dictas legendos
              scribentur an. Vis ei tation iisque suscipit, vim id tota dolores hendrerit.</p>
            <button>Read more</button>
          </div>
        </div>
      </div>

      {/* --------------welcome and---------------- */}

      {/* ---------------room start------------------- */}

      <div className='main_room '>
        <div className='heding'>
          <h1>Rooms & Suites</h1>
          <p>Sed diam constituam erat probo.</p>
        </div>

        <div className='d-flex ll'>
          <div className='box'>
            <img src={n6}></img>
          </div>
          <div className='box'>
            <img src={n5}></img>
          </div>
          <div className='box'>
            <img src={n4}></img>
          </div>
        </div>


      </div>

      {/* -------------------room and-------------------- */}

      {/* ------------------hotel start----------------- */}

      <div className='container w-70'>
        <div className='heding mm'>
          <h1>Hotel Facilities</h1>
          <p>An quis eligendi atomorum latine</p>

        </div>
        <div className='main_box'>
          <div className='d-flex'>
            <div className='box-1 d-flex'>
              <div className='left_box'>
                <img src={n7}></img>
              </div>
              <div className='right_box'>
                <h3>High Speed Wifi</h3>
                <p>Vix placerat no, eam cu bonorum sententiae, adipisci atomorum duo noster ad vel</p>
              </div>
            </div>
            <div className='box-1 d-flex'>
              <div className='left_box'>
                <img src={n7}></img>
              </div>
              <div className='right_box'>
                <h3>Front desk 24H</h3>
                <p>Scripta apeirian in his. Quo accusa complect eu, errem adipisci ocurreret an per</p>
              </div>
            </div>
            <div className='box-1 d-flex'>
              <div className='left_box'>
                <img src={n7}></img>
              </div>
              <div className='right_box'>
                <h3>Parking Space</h3>
                <p>An quis eligendi duo, placerat latine veritus vim placerat. Duo errem latine scribentur</p>
              </div>
            </div>

          </div>
          <div className='d-flex'>
            <div className='box-1 d-flex'>
              <div className='left_box'>
                <img src={n7}></img>
              </div>
              <div className='right_box'>
                <h3> Swimming Pool</h3>
                <p>Has et magna dolore dicit. No placerat essent inermis nec prima homero similique pri at.</p>
              </div>
            </div>
            <div className='box-1 d-flex'>
              <div className='left_box'>
                <img src={n7}></img>
              </div>
              <div className='right_box'>
                <h3>Spa center</h3>
                <p>Mel graece consequ cu, ex dicunt appareat duo, vim errem adipisci augue placerat.</p>
              </div>
            </div>
            <div className='box-1 d-flex'>
              <div className='left_box'>
                <img src={n7}></img>
              </div>
              <div className='right_box'>
                <h3>Fitness Center</h3>
                <p>Ne ius assentior, te soluta facilisis mel placerat appareat duo dicunt splendide quo no.</p>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* -------------------hotel and----------------- */}

      {/* ----------extra start---------------- */}

      <div className='container yy w-70'>
        <div className='heding mm'>
          <h1>Extra Services</h1>
          <p>Eos clita partem utroque veri.</p>

        </div>
        <div className='main-box-3'>
          <div className='d-flex'>
            <div className='left_box_3 d-flex'>
              <div className='box_3_img'>
                <img src={n8}></img>
              </div>
              <div className='box_3_contain'>
                <h4>Restaurant & bar</h4>
                <p>Vis ei tation iisque suscipit, vim id tota dolores hendrerit.</p>
                <span>read more</span>
              </div>
            </div>
            <div className='right_box_3 d-flex'>
              <div className='box_3_img'>
                <img src={n9}></img>
              </div>
              <div className='box_3_contain'>
                <h4>Meetings & events</h4>
                <p>Lorem ipsum dolor sit amet, tota vis constituto neglegentur.</p>
                <span>read more</span>
              </div>
            </div>

          </div>
          <div className='d-flex ww'>
            <div className='left_box_3 d-flex'>

              <div className='box_3_contain'>
                <h4>Booking Tours</h4>
                <p>Pri ad deserunt percipi ullam corper, mel dicam constitu.  </p>
                <span>read more</span>
              </div>
              <div className='box_3_img'>
                <img src={n10}></img>
              </div>
            </div>
            <div className='right_box_3 d-flex'>

              <div className='box_3_contain'>
                <h4>Airport Transfers</h4>
                <p>Ne labitur persecu ius, in tale laoreet mentit pri, laoreet.</p>
                <span>read more</span>
              </div>
              <div className='box_3_img'>
                <img src={n11}></img>
              </div>
            </div>

          </div>
        </div>
      </div>


      {/* --------------extra and--------------- */}


      {/* ---------------images start------------- */}

      <div className='imges'>
        {/* <div className='oo'> */}
        <div className='imges_contain'>
          <div className='qq'>
            <h1>Bilury Hotel Video</h1>
            <p> Eos clita partem utroque ut, veri integre qui ut, id duo dolore tacimates. Modo detracto scribentur id vis.
              Virtute appellantur mea eu, eos an dicant posidonium efficiendi. </p>
          </div>
        </div>
      </div>
      {/* </div> */}

      {/* -------------------images and---------------- */}

      {/* -----------------news start---------------- */}

      <div className='container ee w-50   '>
        <div className='heding mm'>
          <h1>Extra Services</h1>
          <p>Eos clita partem utroque veri.</p>

        </div>
        <div className='cp_box'>
          <div className='d-flex'>
            <div className='box-7'>
              <img src={n12}></img>
              <div className='box-7-contain'>
                <h4>Promotion</h4>
                <h2>Bilury's Summer Promotion</h2>
                <p>Eos clita partem utroque ut, veri integre qui ut, id posidonium
                  duo dolore tacimates. Modo detracto scribentur id vis.</p>
                <span>Details</span>
              </div>
            </div>
            <div className='box-7'>
              <img src={n13}></img>
              <div className='box-7-contain'>
                <h4>Promotion</h4>
                <h2>Bilury's Summer Promotion</h2>
                <p>Eos clita partem utroque ut, veri integre qui ut, id posidonium
                  duo dolore tacimates. Modo detracto scribentur id vis.</p>
                <span>Details</span>
              </div>
            </div>
            <div className='box-7'>
              <img src={n14}></img>
              <div className='box-7-contain'>
                <h4>Promotion</h4>
                <h2>Bilury's Summer Promotion</h2>
                <p>Eos clita partem utroque ut, veri integre qui ut, id posidonium
                  duo dolore tacimates. Modo detracto scribentur id vis.</p>
                <span>Details</span>
              </div>
            </div>
          </div>
          <div className='tt'>
            <button>view all</button>

          </div>

        </div>
      </div>


      {/* ---------------------news and----------------- */}


      {/* ------------------fuoter start---------------  */}


      <div className='fouter'>
        <div className='logo'>
          <div className='d-flex j-s gg'>
            <div className='logo-1'>
              <img src={n17}></img>
            </div>
            <div className='logo-1'>
              <img src={n18}></img>
            </div>
            <div className='logo-1'>
              <img src={n19}></img>
            </div>
            <div className='logo-1'>
              <img src={n20}></img>
            </div>
            <div className='logo-1'>
              <img src={n21}></img>
            </div>
            <div className='logo-1'>
              <img src={n22}></img>
            </div>
            {/* <span></span> */}
          </div>

        </div>
        <h1></h1>
        <div className='d-flex'>

          <div className='fouter-1'>
            <img src={n}></img>
            <p>Sed diam constituam ei, qui erat probo dissentiet ex. Id vim libris volutpat, pri cu errem timeam cotidieque, purto summo has te. An quis eligendi atomorum duo,
              latine veritus vituperata vim no. Duo errem latine scribentur an.</p>
          </div>
          <div className='fouter-2'>
            <h1>Contact Info</h1>
            <p>610 Placer Loquen, Paris, France.</p>
            <p>+33 321-654-9876 (Ext: 123).</p>
            <p>Booking@example.com</p>
            <p>www.example.com</p>
          </div>
          <div className='fouter-3 '>
            <h1>Quick Links</h1>
            <div className='d-flex nn'>
              <ul className='ss' >
                <li>Bilury's Story</li>
                <li>Team</li>
                <li>News</li>
                <li>Contact Us</li>
                <li>My Account</li>
              </ul>
              <ul className='ss'>
                <li>Rooms & Suites</li>
                <li>Spa & Wellness</li>
                <li>Restaurant</li>
                <li>Booking tours</li>
                <li>Airpost pickup</li>
              </ul>
            </div>
          </div>
          <div className='fouter-4'>
            <h1>get the app</h1>
            <img src={n15}></img>
            <img src={n16}></img>
          </div>

        </div>
      </div>


      {/* ---------------------futer and--------------- */}






    </div>

  );
}

export default App;