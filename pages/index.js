import React from "react";
import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu/index";
import { StyledTimeline } from "../src/components/Timeline";
import { StyledFavorites } from "../src/components/Favorites";


function HomePage() {
    const estilosHome = {
        display: "flex",
        flexDirection: "column",
        flex: 1,
    };
    const [valorDoFiltro, setValorDoFiltro] = React.useState("");
    return (
        <>
            <CSSReset />
            <div style={estilosHome}>
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
                <Header></Header>
                <Timeline searchValue={valorDoFiltro} playlists={config.playlists} favorites={config.favorites}></Timeline>
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
        max-height: 230px;
    }
    .banner-home img{
        width: 100%;
        height: 230px;
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
function Timeline({ searchValue, ...propriedades }) {
    const playlistNames = Object.keys(propriedades.playlists);
    const favoritesGitHub = propriedades.favorites;
    
    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = propriedades.playlists[playlistName];
                return (
                    <section key={playlistName}>
                        <h2>{playlistName}</h2>
                        <div>
                        {videos
                            .filter((video) => {
                                const titleNormalized = video.title.toLowerCase();
                                const searchValueNormalized = searchValue.toLowerCase();
                                return titleNormalized.includes(searchValueNormalized)
                            })
                            .map((video) => {
                                return (
                                    <a key={video.url} href={video.url} target="_blank" rel="noopener">
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
            <StyledFavorites>
            <h2>Favoritos</h2>
            {favoritesGitHub.map((favorite) => {
                return (
                    <div>
                        <a href={`https://github.com/${favorite.github}`} target="_blank" rel="noopener">
                            <img src={`https://github.com/${favorite.github}.png`}></img>
                            <p>
                                @{favorite.github}
                            </p>
                        </a>
                    </div>
                )
            })}
            </StyledFavorites>
        </StyledTimeline>
    )
}
