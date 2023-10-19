import React, { useEffect, useState } from "react";
import { useGetAccountBalance } from "../../hooks/useAccountBalance";
import { Container } from "../shared/Container";
import { SafeAreaView } from "react-native-safe-area-context";
import { MainCircle } from "../Home/Circles/MainCircle/MainCircle";
import {
  useGetConsumedEnergy,
  useGetProducedEnergy,
} from "../../hooks/useEnergyBalance";

const Home = () => {
  const [date, setDate] = useState(new Date());
  const [accountBalance, setAccountBalance] = useState<number>(10);
  const [consumedEnergy, setConsumedEnergy] = useState<number>(7);
  const [producedEnergy, setProducedEnergy] = useState<number>(0);
  const [dailyBalance] = useState<number>(1);

  const { isFetched: isAccountBalanceFetched, data: accountBalanceData } =
    useGetAccountBalance();
  const { isFetched: isConsumedEnergyFetched, data: consumedEnergyData } =
    useGetConsumedEnergy();

  const { isFetched: isProducedEnergyFetched, data: producedEnergyData } =
    useGetProducedEnergy();

  useEffect(() => {
    if (isAccountBalanceFetched) {
      setAccountBalance(accountBalanceData);
    }
  }, [isAccountBalanceFetched, accountBalanceData]);

  useEffect(() => {
    if (isConsumedEnergyFetched) {
      setConsumedEnergy(consumedEnergyData);
    }
  }, [isConsumedEnergyFetched, consumedEnergyData]);

  useEffect(() => {
    if (isProducedEnergyFetched) {
      setProducedEnergy(producedEnergyData);
    }
  }, [isProducedEnergyFetched, producedEnergyData]);

  return (
    <Container>
      <SafeAreaView>
        <MainCircle
          date={date}
          setDate={setDate}
          accountBalance={accountBalance}
          consumedEnergy={consumedEnergy}
          producedEnergy={producedEnergy}
          dailyBalance={dailyBalance}
        />
      </SafeAreaView>
    </Container>
  );
};

export default Home;
