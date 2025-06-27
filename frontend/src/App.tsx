import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Grid, Container, Button } from '@mui/material';
import YouTube from 'react-youtube';
import axios from 'axios';
import { EpisodeList } from './components/EpisodeList'; // Add this import

interface JojoPart {
  title: string;
  part: number;
  description: string;
  trailerUrl: string;
  episodes?: Array<{
    episodeNumber: number;
    title: string;
    summary: string;
  }>;
}

const App = () => {
  const [parts, setParts] = useState<JojoPart[]>([
    {
      title: "Phantom Blood",
      part: 1,
      description: "The beginning of the Joestar bloodline's saga...",
      trailerUrl: "https://www.youtube.com/embed/JDGxRXRtCGQ",
      episodes: [
        {
          episodeNumber: 1,
          title: "Dio the Invader",
          summary: "Jonathan meets Dio Brando..."
        },
        {
          episodeNumber: 2,
          title: "A Letter from the Past",
          summary: "George Joestar's mysterious letter..."
        }
      ]
    },
    {
      title: "Stardust Crusaders",
      part: 2,
      description: "Jotaro and crew battle through Egypt...",
      trailerUrl: "https://www.youtube.com/embed/pmanSU8UFpc",
      episodes: [
        {
          episodeNumber: 1,
          title: "The Man with the Star Birthmark",
          summary: "Jotaro Kujo awakens his Stand..."
        }
      ]
    }
  ]);

  // Comment out the API call for now
  // useEffect(() => {
  //   axios.get('http://localhost:5000/api/parts')
  //     .then(response => setParts(response.data))
  //     .catch(error => console.error('Error fetching parts:', error));
  // }, []);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h2" gutterBottom>
        JoJo's Bizarre Adventure Streaming
      </Typography>
      
      <Grid container spacing={4}>
        {parts.map((part) => (
          <Grid item key={part.part} xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%' }}>
              <div style={{ height: '200px' }}>
                <YouTube 
                  videoId={part.trailerUrl.split('/').pop()}
                  opts={{ 
                    height: '100%', 
                    width: '100%'
                  }}
                />
              </div>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Part {part.part}: {part.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={2}>
                  {part.description}
                </Typography>
                <Button 
                  variant="contained" 
                  color="primary"
                  onClick={() => window.open(part.trailerUrl, '_blank')}
                >
                  Watch on YouTube
                </Button>
                <EpisodeList episodes={part.episodes || []} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default App;