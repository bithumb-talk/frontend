import React, { useState } from 'react';
import {
  TextField, Tabs, Tab, Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const CoinPriceListContainer = styled('article')({
  width: '400px',
  height: '100%',
  // border: '1px solid #000',
  padding: '10px',
  boxShadow: '2px 2px 4px #dee1e7',
});

const CoinSearchContainer = styled('div')({
  position: 'relative',
});

const CoinSearchInput = styled((props) => <TextField {...props} />)({
  width: '100%',
});

const CustomCloseIcon = styled((props) => <CloseIcon {...props} />)({
  position: 'absolute',
  right: '10px',
  top: '50%',
  transform: 'translateY(-50%)',
  fontSize: '16px',
});

const CustomStarBorderIcon = styled((props) => <StarBorderIcon {...props} />)({
  fontSize: '16px',
});

const CoinPriceInfoTab = styled('div')({
  display: 'flex',
  fontSize: '12px',
  margin: '10px 0',
});

const CoinListItem = styled('div')({
  display: 'flex',
  alignItems: 'center',
  fontSize: '14px',
  borderTop: '.5px solid #cbcbcb',
  height: '50px',
});

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function CoinPriceList() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <CoinPriceListContainer>
        <section>
          <CoinSearchContainer>
            <CoinSearchInput
              id="outlined-basic"
              label="코인명/심볼 검색"
              variant="outlined"
              size="small"
            />
            <CustomCloseIcon />
          </CoinSearchContainer>
        </section>

        <section>
          <div>
            <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="원화" {...a11yProps(0)} />
              <Tab label="관심" {...a11yProps(1)} />
            </Tabs>
          </div>
        </section>

        <section>
          <CoinPriceInfoTab>
            <Box sx={{
              width: 30,
            }}
            />
            <Box sx={{
              width: 94,
            }}
            >
              <p>자산</p>
            </Box>
            <Box sx={{
              width: 88,
            }}
            >
              <p>현재가</p>
            </Box>
            <Box sx={{
              width: 78,
            }}
            >
              <p>변동률</p>
            </Box>
            <Box>
              <p>거래금액</p>
            </Box>
          </CoinPriceInfoTab>

          <div>
            <CoinListItem>
              <Box sx={{
                width: 30,
              }}
              >
                <CustomStarBorderIcon />
              </Box>
              <Box sx={{
                width: 94,
              }}
              >
                <p>비트코인</p>
              </Box>
              <Box sx={{
                width: 88,
              }}
              >
                <p>53,612,000</p>
              </Box>
              <Box sx={{
                width: 78,
              }}
              >
                <p>0.65</p>
              </Box>
              <Box>
                <p>133,831백만</p>
              </Box>
            </CoinListItem>
            <CoinListItem>
              <Box sx={{
                width: 30,
              }}
              >
                <CustomStarBorderIcon />
              </Box>
              <Box sx={{
                width: 94,
              }}
              >
                <p>비트코인</p>
              </Box>
              <Box sx={{
                width: 88,
              }}
              >
                <p>53,612,000</p>
              </Box>
              <Box sx={{
                width: 78,
              }}
              >
                <p>0.65</p>
              </Box>
              <Box>
                <p>133,831백만</p>
              </Box>
            </CoinListItem>
          </div>
        </section>
      </CoinPriceListContainer>
    </>
  );
}

export default CoinPriceList;
