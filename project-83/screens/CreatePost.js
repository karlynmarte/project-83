import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class CreatePost extends Component {
    render() {if (this.state.fontsLoaded) {
      SplashScreen.hideAsync();
      let preview_images = {
        image_1: require("../assets 2/image_1.jpg"),
        image_2: require("../assets 2/image_2.jpg"),
        image_3: require("../assets 2/image_3.jpg"),
        image_4: require("../assets 2/image_4.jpg"),
        image_5: require("../assets 2/image_5.jpg"),

        
        return ( <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
              <Image
                source={require("../assets/logo.png")}
                style={styles.iconImage}
              ></Image>
            </View>
            <View style={styles.appTitleTextContainer}>
              <Text style={styles.appTitleText}>New Post</Text>
            </View>
          </View>
          <View style={styles.fieldsContainer}>
            <Image
              source={preview_images[this.state.previewImage]}
              style={styles.previewImage}
            ></Image>
            <View style={{ height: RFValue(this.state.dropdownHeight) }}>
            <DropDownPicker
                items={[
                  { label: "Image 1", value: "image_1" },
                  { label: "Image 2", value: "image_2" },
                  { label: "Image 3", value: "image_3" },
                  { label: "Image 4", value: "image_4" },
                  { label: "Image 5", value: "image_5" },
                ]}
                defaultValue={this.state.previewImage}
                open={this.state.dropdownHeight == 170 ? true : false}
                onOpen={() => {
                  this.setState({ dropdownHeight: 170 });
                }}
                onClose={() => {
                  this.setState({ dropdownHeight: 40 });
                }}
                style={{
                  backgroundColor: "transparent",
                  borderWidth: 1,
                  borderColor: "white",
                }}
                textStyle={{
                  color: this.state.dropdownHeight == 170 ? "black" : "white",
                  fontFamily: "Bubblegum-Sans",
                }}
                onSelectItem={(item) =>
                  this.setState({
                    previewImage: item.value,
                  })
                }
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Create Post</Text>
            </View>
        )
    }
}