import { IContent } from "../models/icontent";

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
 },
 {
  id: 4,
  title: "chess.com",
  description: "Join millions of players playing numerous chess games every day on Chess.com. Choose from blitz and daily games, play vs. computer, solve puzzles, and more",
  author: "ChessMaster",
  imgSrc: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.chess.com%2F&psig=AOvVaw1jsgWaiCutVQa1I4Fk3StQ&ust=1683414706711000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKiP5s6m3_4CFQAAAAAdAAAAABAE",
  type: "Online chess game",
  tags: ["Learn", "Puzzels", "Play", "Bitz"]
  },
  {
    id: 5,
    title: "ChessGames",
    description: "Chess Games: If you enjoy exclaiming, 'Checkmate!' after winning a keen game of strategy, then try one of our many free, online chess games!",
    author: "ChessGameMaster",
    imgSrc: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fa.poki.com%2Fcdn-cgi%2Fimage%2Fquality%3D78%2Cwidth%3D1200%2Cheight%3D600%2Cf%3Dauto%2Fopengraph%2F3%2Fcategories%2Fchess.png&tbnid=yhsPAdx4LQ41bM&vet=12ahUKEwi69p-qp9_-AhUXElkFHdg9B_cQMygCegUIARDHAQ..i&imgrefurl=https%3A%2F%2Fpoki.com%2Fen%2Fchess&docid=rks73n_RwyUoYM&w=1200&h=600&itg=1&q=chess%20game%20poki&client=safari&ved=2ahUKEwi69p-qp9_-AhUXElkFHdg9B_cQMygCegUIARDHAQ",
    type: "Online chess game",
    tags: ["Learn", "Puzzels", "Play", "Coaching"]
    },
    {
      id: 6,
      title: "chess.org",
      description: "Play a game of chess within seconds. Play chess against computer, challenge a friend or find a random opponent simply by one click!",
      author: "ChessMaster",
      imgSrc: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F378800000123755029%2F0f6672f2a6c8619fcac4dd9c98661e2c_400x400.png&tbnid=YOPqOWAq9uQdFM&vet=12ahUKEwj757bnp9_-AhUHE1kFHZ3NDHIQMygFegUIARCUAQ..i&imgrefurl=https%3A%2F%2Ftwitter.com%2Fwwwchessorg&docid=_BD6AB9D8DToZM&w=400&h=400&q=chess.org&client=safari&ved=2ahUKEwj757bnp9_-AhUHE1kFHZ3NDHIQMygFegUIARCUAQ",
      type: "Online chess game",
      tags: ["Learn", "Puzzels", "Play", "Coaching"]
      }];


 export const INVALIDGAME: IContent = {
    id: -1,
    title: "",
    description: "",
    author: "",
    imgSrc: "",
    type: "",
    tags: []
  };

