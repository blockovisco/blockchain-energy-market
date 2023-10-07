import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { Container } from "../../shared/Container";
import { ApiRequests } from "../../../requests/ApiRequests";
import { MainCircle } from "./Circles/MainCircle/MainCircle";

const Home = () => {
  const [date, setDate] = useState(new Date());

  // DATA FROM FETCHING

  const [accountBalance, setAccountBalance] = useState(13);
  const [energyBalance, setEnergyBalance] = useState(1.3);
  const [dailyBalance] = useState(-7);

  // END OF DATA

  /* DATA FETCHING FUNCTIONS ------------------------------------------------------------*/

  useEffect(() => {
    getAccountBalance().then((r) => r);
    getEnergyBalance().then((r) => r);
  });

  const getAccountBalance = async () => {
    await ApiRequests.getAccountBalance()
      .then((response) => {
        const balance = response.data;
        setAccountBalance(balance);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getEnergyBalance = async () => {
    await ApiRequests.getEnergyList()
      .then((response) => {
        const energyList = response.data;
        if (energyList.length != 1) {
          console.log(
            "Warning! Energy assets list length is not equal to 1! Fetched value is probably wrong"
          );
        }
        setEnergyBalance(energyList[0].Amount);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  /* END OF FETCHING FUNCTIONS */

  return (
    <Container>
      <SafeAreaView>
        <MainCircle
          date={date}
          setDate={setDate}
          accountBalance={accountBalance}
          energyBalance={energyBalance}
          dailyBalance={dailyBalance}
        />
      </SafeAreaView>
    </Container>
  );
};

export default Home;
