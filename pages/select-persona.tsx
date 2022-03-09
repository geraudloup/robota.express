import * as React from 'react';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const images = [
    {
        url: '/static/images/buttons/company.png',
        title: 'Je propose une offre d\'emploi',
        bold: ' (c\'est gratuit !)',
        width: '34%',
        backgroundPosition: 'center 40%',
    },
    {
        url: '/static/images/buttons/refugee.jpg',
        title: 'Je cherche un emploi',
        bold: ' (c\'est gratuit !)',
        width: '33%',
        backgroundPosition: 'left 40%',
    },
    {
        url: '/static/images/buttons/translation.jpg',
        title: 'Je forme un(e) ukrainien(ne)',
        bold: ' (c\'est rémunéré ou bénévole !)',
        width: '33%',
        backgroundPosition: 'center 40%',
    },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 'calc(100vh)',
    [theme.breakpoints.down('md')]: {
        width: '100% !important', // Overrides inline-style
        height: '33vh',
    },
    '&:hover, &.Mui-focusVisible': {
        zIndex: 1,
        '& .MuiImageBackdrop-root': {
            opacity: 0.15,
        },
        '& .MuiImageMarked-root': {
            opacity: 0,
        },
        '& .MuiTypography-root': {
            border: '4px solid currentColor',
        },
    },
}));

const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
});

const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
}));

export default function ButtonBases() {
    return (
        <Stack>
            <Box sx={{ ml: 2 }}>
                <Typography component="h2" variant="h4" gutterBottom>{"NOUS faisons l'intermédiaire entre"}</Typography>
                <Paper elevation={6} sx={{ width: '100%', maxWidth: "max-content", mb: 2 }} >
                    <List sx={{ width: '100%', maxWidth: "max-content", bgcolor: 'background.paper' }}>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Entreprise" src="/static/images/buttons/company.png" />
                            </ListItemAvatar>
                            <ListItemText
                                primary="Entreprise généreuse"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            {'prête à recruter des réfugiés ukrainiens '}
                                        </Typography>
                                        et prête à attendre que certains se forment à la langue
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Réfugiés" src="/static/images/buttons/refugee.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                                primary="Réfugié(e) ukrainien(ne) employable"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            {'qui le plus tôt retrouve une activité productive, le plus tôt peut rebondir et aider ses compatriotes. '}
                                        </Typography>
                                        En 2019, les ukrainiens sont employés à: <a href="https://donnees.banquemondiale.org/indicator/SL.EMP.WORK.FE.ZS?locations=UA" target="_blank" rel="noreferrer">88% pour les femmes</a> et <a href="https://donnees.banquemondiale.org/indicator/SL.EMP.WORK.MA.ZS?locations=UA" target="_blank" rel="noreferrer">83% pour les hommes</a>!
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Formation Languistique" src="/static/images/buttons/translation.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                                primary="Institut de Langue/Formateur/Formatrice"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            {'bénévole ou rémunéré(e), '}
                                        </Typography>
                                        capable de former des ukrainiens rapidement à une langue pour un poste donné
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    </List>
                </Paper>
                <Typography component="h2" variant="h4" gutterBottom>Et VOUS ?</Typography>
            </Box>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
                {images.map((image) => (
                    <ImageButton
                        focusRipple
                        key={image.title}
                        style={{
                            width: image.width,
                        }}
                    >
                        <ImageSrc style={{ backgroundImage: `url(${image.url})`, backgroundPosition: `${image.backgroundPosition}` }} />
                        <ImageBackdrop className="MuiImageBackdrop-root" />
                        <Image>
                            <Typography
                                component="span"
                                variant="subtitle1"
                                color="inherit"
                                sx={{
                                    position: 'relative',
                                    p: 4,
                                    pt: 2,
                                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                                }}
                            >
                                {image.title}<br /><Box component="span" sx={{ fontWeight: 'bold' }}>{image.bold}</Box>
                                <ImageMarked className="MuiImageMarked-root" />
                            </Typography>
                        </Image>
                    </ImageButton>
                ))}
            </Box>
        </Stack>
    );
}
