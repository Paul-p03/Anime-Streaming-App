import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface Episode {
  episodeNumber: number;
  title: string;
  summary: string;
}

interface EpisodeListProps {
  episodes: Episode[];
}

export const EpisodeList = ({ episodes }: EpisodeListProps) => {
  return (
    <div style={{ marginTop: '16px' }}>
      <Typography variant="h6" gutterBottom>
        Episodes
      </Typography>
      {episodes.map(episode => (
        <Card key={episode.episodeNumber} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="subtitle1">
              Episode {episode.episodeNumber}: {episode.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {episode.summary}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};