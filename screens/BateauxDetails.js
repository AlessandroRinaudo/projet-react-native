export default class BateauDetails extends React.Component {
    render() {
        let products = this.props.route.params.data ? this.props.route.params.data : [];
        return <View style= {styles.container}> 
                    <Headers  navigation={this.props.navigation}></Headers>
                    <BackgroundImage>
                        <Text style ={styles.displayProduit}> Choisissez vos produits </Text>
                        <ScrollView>
                        <View style= {styles.buttons} >
                        {products.map((value,index)=> {
                            return <Product key={index} item={value}/>
                        })}
                        </View>
                        </ScrollView>
                    </BackgroundImage>
                </View>
    }
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        //justifyContent : 'center',
        justifyContent: 'space-between',
        marginTop: 50,
    },
    displayProduit: {
        padding:10,
        textAlign:"center",
        backgroundColor: "#71c1fc",
        height:50
    },
    buttons:{
        flex:1,
        marginTop:15,
        flexDirection:"column",
        opacity:0.5,
        height:10
    }
    });