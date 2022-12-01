import { React, useState } from "react";
import LayOut from "../Layout";
import Page from "../PageF/Page";

const Call = (props) => {
  const [data, setData] = useState(true);

  const renderHandler = (e) => {
    e.preventDefault();
    setData(false);
  };

  const Api = [
    {
      post: `Sport`,
      Subject: "Soccer",
      Date: new Date().toUTCString(),
      Img:
        "https://digitalhub.fifa.com/transform/11efbf28-c08e-4a13-958f-78685fbb8a80/Qatar-2022-s-32-teams-graphic",
      Img1:
        "https://nairametrics.com/wp-content/uploads/2022/04/FIFA-World-Cup.jpg",
      Img2: "https://image2.tin247.news/pictures/2022/11/06/ous1667685406.jpeg",
      Article:
        " It is Canada’s second ever appearance at the World Cup, and it’s first trip to the tournament since a hapless three-loss performance 36 years ago Belgium, meanwhile, has been a contender in recent years, finishing third at the 2018 World Cup and losing to Italy in the quarterfinals at last year’s European Championship. But its aging team has injury problems and striker Romelu Lukaku will miss the match against Canada and perhaps also the second match against Morocco. Belgium, meanwhile, has been a contender in recent years, finishing third at the 2018 World Cup and losing to Italy in the quarterfinals at last year’s European Championship. But its aging team has injury problems and striker Romelu Lukaku will miss the match against Canada and perhaps also the second match against Morocco. Belgium, meanwhile, has been a contender in recent years, finishing third at the 2018 World Cup and losing to Italy in the quarterfinals at last year’s European Championship. But its aging team has injury problems and striker Romelu Lukaku will miss the match against Canada and perhaps also the second match against Morocco. Belgium, meanwhile, has been a contender in recent years, finishing third at the 2018 World Cup and losing to Italy in the quarterfinals at last year’s European Championship. But its aging team has injury problems and striker Romelu Lukaku will miss the match against Canada and perhaps also the second match against Morocco. Belgium, meanwhile, has been a contender in recent years, finishing third at the 2018 World Cup and losing to Italy in the quarterfinals at last year’s European Championship. But its aging team has injury problems and striker Romelu Lukaku will miss the match against Canada and perhaps also the second match against Morocco. Belgium, meanwhile, has been a contender in recent years, finishing third at the 2018 World Cup and losing to Italy in the quarterfinals at last year’s European Championship. But its aging team has injury problems and striker Romelu Lukaku will miss the match against Canada and perhaps also the second match against Morocco. Belgium, meanwhile, has been a contender in recent years, finishing third at the 2018 World Cup and losing to Italy in the quarterfinals at last year’s European Championship. But its aging team has injury problems and striker Romelu Lukaku will miss the match against Canada and perhaps also the second match against Morocco  quarterfinals at last year’s European Championship. But its aging team has injury problems and striker Romelu Lukaku will miss the match against Canada and perhaps also the second match against Morocco. Belgium, meanwhile, has been a contender in recent years, finishing third at the 2018 World Cup and losing to Italy in the quarterfinals at last year’s European Championship. But its aging team has injury problems and striker Romelu Lukaku will miss the match against Canada and perhaps also the second match against Morocco. Belgium, meanwhile, has been a contender in recent years, finishing third at the 2018 World Cup and losing to Italy in the quarterfinals at last year’s European Championship. But its aging team has injury problems and striker Romelu Lukaku will miss the match against Canada and perhaps also the second match against Morocco",
    },
    {
      post: `FaShion`,
      Subject: "trends",
      Date: new Date().toUTCString(),
      Img:
        "https://hips.hearstapps.com/hmg-prod/images/spring-2022-trends-1642786776.jpg?crop=1xw:0.999000999000999xh;center,top&resize=640:*",
      Img1:
        "https://www.grazia.fr/wp-content/uploads/grazia/2022/09/sans-titre-6-9-750x410.png",
      Img2:
        "https://static.standard.co.uk/2022/10/06/13/newFile-9.jpg?width=968&auto=webp&quality=50&crop=968%3A645%2Csmart",
      Article:
        " It is Canada’s second ever appearance at the World Cup, and it’s first trip to the tournament since a hapless three-loss performance 36 years ago Belgium, meanwhile, has been a contender in recent years, finishing third at the 2018 World Cup and losing to Italy in the quarterfinals at last year’s European Championship. But its aging team has injury problems and striker Romelu Lukaku will miss the match against Canada and perhaps also the second match against Morocco. Belgium, meanwhile, has been a contender in recent years, finishing third at the 2018 World Cup and losing to Italy in the quarterfinals at last year’s European Championship. But its aging team has injury problems and striker Romelu Lukaku will miss the match against Canada and perhaps also the second match against Morocco. Belgium, meanwhile, has been a contender in recent years, finishing third at the 2018 World Cup and losing to Italy in the quarterfinals at last year’s European Championship. But its aging team has injury problems and striker Romelu Lukaku will miss the match against Canada and perhaps also the second match against Morocco. Belgium, meanwhile, has been a contender in recent years, finishing third at the 2018 World Cup and losing to Italy in the quarterfinals at last year’s European Championship. But its aging team has injury problems and striker Romelu Lukaku will miss the match against Canada and perhaps also the second match against Morocco. Belgium, meanwhile, has been a contender in recent years, finishing third at the 2018 World Cup and losing to Italy in the quarterfinals at last year’s European Championship. But its aging team has injury problems and striker Romelu Lukaku will miss the match against Canada and perhaps also the second match against Morocco. Belgium, meanwhile, has been a contender in recent years, finishing third at the 2018 World Cup and losing to Italy in the quarterfinals at last year’s European Championship. But its aging team has injury problems and striker Romelu Lukaku will miss the match against Canada and perhaps also the second match against Morocco. Belgium, meanwhile, has been a contender in recent years, finishing third at the 2018 World Cup and losing to Italy in the quarterfinals at last year’s European Championship. But its aging team has injury problems and striker Romelu Lukaku will miss the match against Canada and perhaps also the second match against Morocco quarterfinals at last year’s European Championship. But its aging team has injury problems and striker Romelu Lukaku will miss the match against Canada and perhaps also the second match against Morocco. Belgium, meanwhile, has been a contender in recent years, finishing third at the 2018 World Cup and losing to Italy in the quarterfinals at last year’s European Championship. But its aging team has injury problems and striker Romelu Lukaku will miss the match against Canada and perhaps also the second match against Morocco. Belgium, meanwhile, has been a contender in recent years, finishing third at the 2018 World Cup and losing to Italy in the quarterfinals at last year’s European Championship. But its aging team has injury problems and striker Romelu Lukaku will miss the match against Canada and perhaps also the second match against Morocco ",
    },
    {
      post: `Sport`,
      Subject: "UFC",
      Date: new Date().toUTCString(),
      Img:
        "https://cdn.vox-cdn.com/thumbor/2Jb1uf9dhrJ-NwHUiGyjskH7df0=/0x0:4572x2997/1200x800/filters:focal(1914x120:2644x850)/cdn.vox-cdn.com/uploads/chorus_image/image/71621180/1441090963.0.jpg",
      Img1:
        "https://mmajunkie.usatoday.com/wp-content/uploads/sites/91/2022/11/ufc-281-israel-adesanya-alex-pereira.jpg?w=1000&h=600&crop=1",
      Img2:
        "https://library.sportingnews.com/styles/crop_style_16_9_mobile_2x/s3/2022-11/nba-plain--c70629e7-bf9c-45d2-82bb-d1e0e763e02c.png?itok=rzCClnVa",
      Article:
        " It is Canada’s second ever appearance at the World Cup, and it’s first trip to the tournament since a hapless three-loss performance 36 years ago Belgium, meanwhile, has been a contender in recent years, finishing third at the 2018 World Cup and losing to Italy in the quarterfinals at last year’s European Championship. But its aging team has injury problems and striker Romelu Lukaku will miss the match against Canada and perhaps also the second match against Morocco. Belgium, meanwhile, has been a contender in recent years, finishing third at the 2018 World Cup and losing to Italy in the quarterfinals at last year’s European Championship. But its aging team has injury problems and striker Romelu Lukaku will miss the match against Canada and perhaps also the second match against Morocco. Belgium, meanwhile, has been a contender in recent years, finishing third at the 2018 World Cup and losing to Italy in the quarterfinals at last year’s European Championship. But its aging team has injury problems and striker Romelu Lukaku will miss the match against Canada and perhaps also the second match against Morocco. Belgium, meanwhile, has been a contender in recent years, finishing third at the 2018 World Cup and losing to Italy in the quarterfinals at last year’s European Championship. But its aging team has injury problems and striker Romelu Lukaku will miss the match against Canada and perhaps also the second match against Morocco. Belgium, meanwhile, has been a contender in recent years, finishing third at the 2018 World Cup and losing to Italy in the quarterfinals at last year’s European Championship. But its aging team has injury problems and striker Romelu Lukaku will miss the match against Canada and perhaps also the second match against Morocco. Belgium, meanwhile, has been a contender in recent years, finishing third at the 2018 World Cup and losing to Italy in the quarterfinals at last year’s European Championship. But its aging team has injury problems and striker Romelu Lukaku will miss the match against Canada and perhaps also the second match against Morocco. Belgium, meanwhile, has been a contender in recent years, finishing third at the 2018 World Cup and losing to Italy in the quarterfinals at last year’s European Championship. But its aging team has injury problems and striker Romelu Lukaku will miss the match against Canada and perhaps also the second match against Morocco  quarterfinals at last year’s European Championship. But its aging team has injury problems and striker Romelu Lukaku will miss the match against Canada and perhaps also the second match against Morocco. Belgium, meanwhile, has been a contender in recent years, finishing third at the 2018 World Cup and losing to Italy in the quarterfinals at last year’s European Championship. But its aging team has injury problems and striker Romelu Lukaku will miss the match against Canada and perhaps also the second match against Morocco. Belgium, meanwhile, has been a contender in recent years, finishing third at the 2018 World Cup and losing to Italy in the quarterfinals at last year’s European Championship. But its aging team has injury problems and striker Romelu Lukaku will miss the match against Canada and perhaps also the second match against Morocco",
    },
  ];

  return (
    <div>
      {data ? (
        <LayOut handler={renderHandler} info={Api}></LayOut>
      ) : (
        <Page info={Api} />
      )}
    </div>
  );
};

export default Call;
