import { IContent } from "../models/icontent";

// export interface MockContent {
// }


export const CHESSGAMES: IContent[] = [{

    id: 0,
    title: "toytheater",
    description: "Offers educational math, literacy, and art activities and games",
    author: "Ben KG",
    imgSrc: "https://toytheater.com/wp-content/uploads/chess.jpg",
    type: "Online chess game",
    tags: ["Person VS Person", "Person VS Computer"]
    },
    {
    id: 1,
    title: "chesskid",
    description: "Is to make chess fun, safe and accessible",
    author: "FunMasterMike",
    imgSrc: "https://www.chesskid.com/images/socialmedia/welcome_to_chesskid.png",
    type: "Online chess game",
    tags: ["Learn", "Puzzels", "Play", "Coaching"]
    },
    {
     id: 2,
     title: "chessmatec",
     description: "The ChessMatec App is an interactive educational game, the most advanced one for learning and practicing the game of chess in a fun and exciting way",
     author: "Dana Lazarof",
     imgSrc: "https://play-lh.googleusercontent.com/SX2NTZLFLUXSIK36dN19uzmqZCMoqUPx4l74D-nxAK71o4YXL8JabA_xjgu8-dH7Jw=w526-h296-rw",
     type: "Chess app",
     tags: ["Learn", "Chess App", "Play", "Videos"]
    },
    {
     id: 3,
     title: "lichess",
     description: " Play chess in a clean interface. No registration, no ads, no plugin required.",
     author: "Thibault Duplessis",
     imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Lichess_Logo_2019.svg/1200px-Lichess_Logo_2019.svg.png",
     type: "Online chess",
     tags: ["Rapid", "Blitz", "Bullet", "Classical", "Custom"]
 }];

