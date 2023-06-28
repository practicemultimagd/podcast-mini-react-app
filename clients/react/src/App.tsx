import { Routes, Route } from "react-router-dom";
import { Layout } from "./features/ui/layout/Layout";
import { NoMatch } from "./pages/404/NoMatch";
import { Home } from "./pages/home/Home";
import { PodcastId } from "./pages/podcast/PodcastId";
import { EpisodeId } from "./pages/podcast/episode/EpisodeId";

export default function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/podcast/:id" element={<PodcastId />} />
          <Route path="/podcast/:podcast_id/episode/:episode_id" element={<EpisodeId />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}