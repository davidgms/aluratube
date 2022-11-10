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
    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
    .user-info img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .banner-home {
        max-height: 400px;
    }
    .banner-home img{
        width: 100%;
        height: 400px;
        border-radius: 0;
        object-fit: cover;
    }
`;
function Header() {
    return (
        <StyledHeader style={{marginTop: "56px"}}>
            <div className="banner-home">
                <img src={config.banner.src}></img>
            </div>
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
                                        <a href={video.url} target="_blank" rel="noopener noreferer">
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
