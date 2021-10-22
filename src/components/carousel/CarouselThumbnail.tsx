import Slider from 'react-slick';
import { useState, useRef, useEffect } from 'react';
// material
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
// utils
import mockData from '../../utils/mock-data'; //
import { CarouselControlsArrowsIndex } from './controls';
import './SliderStyle.css';
import { Link } from '@mui/material';

// ----------------------------------------------------------------------

const MOCK_CAROUSELS = [...Array(5)].map((_, index) => ({
  id: mockData.id(index),
  title: mockData.text.title(index),
  image: mockData.image.feed(index),
  description: mockData.text.description(index)
}));

const THUMB_SIZE = 64;

const RootStyle = styled(Box)(({ theme }) => {
  const isRTL = theme.direction === 'rtl';

  return {
    root: {
      '& .slick-slide': {
        float: isRTL ? 'right' : 'left'
      }
    }
  };
});

const LargeImgStyle = styled('img')(({ theme }) => ({
  top: 0,
  // width: '100%',
  marginLeft: '0vw',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute'
}));

const ThumbImgStyle = styled('img')(({ theme }) => ({
  opacity: 0.48,
  width: THUMB_SIZE,
  cursor: 'pointer',
  height: THUMB_SIZE,
  margin: theme.spacing(0, 1),
  borderRadius: theme.shape.borderRadiusSm,
  '&:hover': {
    opacity: 0.72,
    transition: theme.transitions.create('opacity')
  }
}));

// ----------------------------------------------------------------------

type CarouselItemProps = {
  title: string;
  description: string;
  image: string;
};

type PropItemProps = {
  id: string;
  title: string;
  description: string;
  image: string;
};

function LargeItem({ item }: { item: CarouselItemProps }) {
  const { image, title } = item;

  return (
    <Box
      sx={{
        position: 'relative',
        height: 'auto'
      }}
    >
      <LargeImgStyle
        style={{
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '50%',
          position: 'relative'
        }}
        alt={title}
        src={`https://ipfs.io/ipfs/${image.split('ipfs://')[1]}`}
      />
    </Box>
  );
}

function ThumbnailItem({ item }: { item: CarouselItemProps }) {
  const { image, title } = item;

  return <ThumbImgStyle alt={title} src={`https://ipfs.io/ipfs/${image.split('ipfs://')[1]}`} />;
}

export default function CarouselThumbnail(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nav1, setNav1] = useState<Slider | undefined>(undefined);
  const [nav2, setNav2] = useState<Slider | undefined>(undefined);
  const slider1 = useRef<Slider | null>(null);
  const slider2 = useRef<Slider | null>(null);

  const handleC = (next) => {
    console.log(next);
    setCurrentIndex(next);
    console.log(currentIndex);
    slider1.current.slickGoTo(next);
  };

  const settings1 = {
    dots: false,
    arrows: false,
    slidesToShow: 1,
    draggable: false,
    slidesToScroll: 1,
    adaptiveHeight: true,
    beforeChange: (current: number, next: number) => handleC(next),
    display: 'flex'
  };

  const settings2 = {
    dots: false,
    arrows: false,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    variableWidth: true,
    centerPadding: '0px',
    beforeChange: (current: number, next: number) => handleC(next),
    slidesToShow: props.nfts?.length > 3 ? 3 : props.nfts?.length
  };

  useEffect(() => {
    if (slider1.current) {
      setNav1(slider1.current);
    }
    if (slider2.current) {
      setNav2(slider2.current);
    }
  }, []);

  const handlePrevious = () => {
    slider1.current?.slickPrev();
    slider2.current?.slickPrev();
  };

  const handleNext = () => {
    slider1.current?.slickNext();
    slider2.current?.slickNext();
  };

  return (
    <RootStyle>
      {props.nfts && props.wallet && (
        <div style={{ overflow: 'hidden' }}>
          <Box
            sx={{
              zIndex: 0,
              borderRadius: 2,
              overflow: 'hidden',
              position: 'relative'
            }}
          >
            <Slider {...settings1} asNavFor={nav2} ref={slider1}>
              {props.nfts?.map((item, counter) => (
                <Link
                  key={counter + 'largeimg'}
                  href={`https://testnets.opensea.io/assets/0xf79f56ce56ca0975d912aaeb6ede34c62dd3d2b0/${props.wallet[counter]}`}
                  target="_blank"
                  style={{
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    width: '50%'
                  }}
                >
                  <LargeItem
                    style={{ height: 'auto' }}
                    item={item}
                    tokenId={props.wallet[counter]}
                  />
                </Link>
              ))}
            </Slider>
            <CarouselControlsArrowsIndex
              index={currentIndex}
              total={props.nfts?.length}
              onNext={handleNext}
              onPrevious={handlePrevious}
            />
          </Box>

          <Box
            sx={{
              mt: 3,
              mx: 'auto',
              '& .slick-current img': {
                opacity: 1,
                border: (theme) => `solid 3px ${theme.palette.primary.main}`
              }
            }}
            style={{ paddingBottom: '72px', position: 'relative' }}
          >
            <Slider style={{ position: 'relative' }} {...settings2} asNavFor={nav1} ref={slider2}>
              {props.nfts?.map((item, counter) => (
                <ThumbnailItem key={counter + 'thumbnail'} item={item} />
              ))}
            </Slider>
          </Box>
        </div>
      )}
    </RootStyle>
  );
}
