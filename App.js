import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import StartSvg from "./StartSvg";
import VaultSvg from "./VaultSvg";
import ShareSvg from "./ShareSvg";
import FrankenSvg from "./FrankenSvg";
import GoldSvg from "./GoldSvg";
import EuroSvg from "./EuroSvg";
import avatar1 from "./assets/avatar-1.png";
import ExchangeSvg from "./ExchangeSvg";
import WalletSvg from "./WalletSvg";
import SendSvg from "./SendSvg";

const colors = {
  grayShade: "#212552",
  orange: "#F7B85C",
  white: "white",
};

const SubTitle = ({ children }) => (
  <Text style={{ color: "white", fontSize: 24, fontWeight: "500" }}>
    {children}
  </Text>
);

const Title = ({ children, style }) => (
  <Text
    style={{
      color: "white",
      fontSize: 64,
      fontWeight: "700",
      textAlign: "center",
      lineHeight: 60,
      ...style,
    }}
  >
    {children}
  </Text>
);

const WelcomeScreen = ({ navigation }) => (
  <View
    style={{
      flex: 1,
      justifyContent: "space-between",
      alignItems: "center",
      padding: 32,
      paddingTop: 128,
      backgroundColor: colors.orange,
    }}
  >
    <View style={{ alignItems: "center" }}>
      <SubTitle>Your community</SubTitle>
      <SubTitle>Your money</SubTitle>
      <Title style={{ paddingTop: 48 }}>Main Franken</Title>
    </View>
    <VaultSvg />
    <TouchableOpacity onPress={() => navigation.replace("wallet")}>
      <StartSvg style={{ marginBottom: 32 }} />
    </TouchableOpacity>
    {/* <StatusBar style="auto" /> */}
  </View>
);

const ScreenTitle = ({ children, style }) => (
  <Text style={{ fontSize: 48, fontWeight: "700", ...style }}>{children}</Text>
);

const WalletScreen = () => (
  <View
    style={{
      flex: 1,
      padding: 32,
      paddingTop: 64,
      backgroundColor: colors.white,
      justifyContent: "space-between",
    }}
  >
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <TouchableOpacity>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={avatar1} style={{ width: 62, height: 63 }} />
          <Text style={{ fontSize: 24, fontWeight: "500", marginLeft: 8 }}>
            lea
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <ShareSvg />
      </TouchableOpacity>
    </View>
    <ScrollView>
      <ScreenTitle style={{ marginTop: 32 }}>Wallet</ScreenTitle>
      <TouchableOpacity>
        <View
          style={{
            marginTop: 16,
            paddingHorizontal: 16,
            paddingVertical: 22,
            backgroundColor: colors.grayShade,
            borderRadius: 16,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <FrankenSvg></FrankenSvg>
            <Text style={{ fontSize: 24, color: "white", marginLeft: 16 }}>
              franken
            </Text>
          </View>
          <View style={{ justifyContent: "center", minHeight: 31.3 }}>
            <Text style={{ fontWeight: "500", fontSize: 20, color: "white" }}>
              356.22
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View
          style={{
            marginTop: 16,
            padding: 16,
            backgroundColor: colors.grayShade,
            borderRadius: 16,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ paddingHorizontal: 2 }}>
              <GoldSvg></GoldSvg>
            </View>
            <Text style={{ fontSize: 24, color: "white", marginLeft: 16 }}>
              gold
            </Text>
          </View>
          <View style={{ alignItems: "flex-end" }}>
            <Text style={{ fontWeight: "500", fontSize: 20, color: "white" }}>
              3.21g
            </Text>
            <Text
              style={{
                fontWeight: "500",
                fontSize: 16,
                fontWeight: "300",
                color: "white",
              }}
            >
              172.95 EUR
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View
          style={{
            marginTop: 16,
            padding: 16,
            backgroundColor: colors.grayShade,
            borderRadius: 16,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <EuroSvg></EuroSvg>
            <Text style={{ fontSize: 24, color: "white", marginLeft: 16 }}>
              euro
            </Text>
          </View>
          <View style={{ justifyContent: "center", minHeight: 43.3 }}>
            <Text
              style={{
                fontWeight: "500",
                fontSize: 20,
                color: "white",
              }}
            >
              467.13
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginBottom: 8,
      }}
    >
      <View style={{ opacity: 0.7 }}>
        <TouchableOpacity>
          <ExchangeSvg></ExchangeSvg>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={{ flexDirection: "column" }}>
        <WalletSvg></WalletSvg>
        <View
          style={{
            borderColor: colors.orange,
            borderBottomWidth: 3,
            borderRadius: 2,
            marginTop: 8,
          }}
        />
      </TouchableOpacity>
      <View style={{ opacity: 0.7 }}>
        <TouchableOpacity>
          <SendSvg></SendSvg>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="welcome"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="welcome" component={WelcomeScreen} />
        <Stack.Screen name="wallet" component={WalletScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
