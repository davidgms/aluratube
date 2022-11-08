import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";


function HomePage() {
    const estilosHome = {
        display: "flex",
        flexDirection: "column",
        flex: 1,
    };
    return (
        <>
            <CSSReset />
            <div style={estilosHome}>
                <Menu />
                <Header></Header>
                <Timeline playlists={config.playlists}></Timeline>
            </div>
        </>
    );
}
  
export default HomePage

const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        display: block;
    }
    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
        margin-top: 50px;
    }
`;
function Header() {
    return (
        <StyledHeader>
            <div className="user-info">
                <img src={`https://github.com/${config.github}.png`}></img>
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </div>
        </StyledHeader>
    )
}
function Timeline(propriedades) {
    const playlistNames = Object.keys(propriedades.playlists);
    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = propriedades.playlists[playlistName];
                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
                            {
                                videos.map((video => {
                                    return (
                                        <a href={video.url}>
                                            <img src={video.thumb}></img>
                                            <p>
                                                {video.title}
                                            </p>
                                        </a>
                                    )
                                }))
                            }
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}
