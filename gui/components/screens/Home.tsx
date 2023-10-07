import React, { useEffect, useState } from "react";
import { useGetAccountBalance } from "../../hooks/useAccountBalance";
import { useGetEnergyBalance } from "../../hooks/useEnergyBalance";
import { Container } from "../shared/Container";
import { SafeAreaView } from "react-native-safe-area-context";
import { MainCircle } from "../Home/Circles/MainCircle/MainCircle";

const Home = () => {
  const [date, setDate] = useState(new Date());
  const [accountBalance, setAccountBalance] = useState<number>(10);
  const [energyBalance, setEnergyBalance] = useState<number>(7);
  const [dailyBalance] = useState<number>(-7);

  const { isFetched: isAccountBalanceFetched, data: accountBalanceData } =
    useGetAccountBalance();
  const { isFetched: isEnergyBalanceFetched, data: energyBalanceData } =
    useGetEnergyBalance();

  useEffect(() => {
    if (isAccountBalanceFetched && !!accountBalanceData) {
      setAccountBalance(accountBalanceData);
    }
  }, [isAccountBalanceFetched, accountBalanceData]);

  useEffect(() => {
    if (isEnergyBalanceFetched && !!energyBalanceData) {
      setEnergyBalance(energyBalanceData);
    }
  }, [isEnergyBalanceFetched, energyBalanceData]);

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
