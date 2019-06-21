import {createStackNavigator, createAppContainer} from 'react-navigation'
import CadastroDeExercicios from '../scenes/Telas/CadastroDeExercicios'
import MenuPrincipal from '../scenes/Telas/MenuPrincipal'
import CadastroDeTreinos from '../scenes/Telas/CadastroDeTreinos'
import SelecionaExercicios from '../scenes/Telas/SelecionaExercicios'
import MeusTreinos from '../scenes/Telas/MeusTreinos'
import IniciarTreino from '../scenes/Telas/IniciarTreino'

const Cenas = createStackNavigator(
    {
        MenuPrincipal: {screen:MenuPrincipal},
        CadastroDeExercicios: {screen:CadastroDeExercicios},
        CadastroDeTreinos: {screen:CadastroDeTreinos},
        SelecionaExercicios: {screen:SelecionaExercicios},
        MeusTreinos: {screen:MeusTreinos},
        IniciarTreino: {screen:IniciarTreino}
    },
    {
        headerMode:'none'
    }
)

const AppContainer = createAppContainer(Cenas)

export default AppContainer