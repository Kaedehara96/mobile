import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useItens } from '../context/ItensContext';

export function CadastrarItens() {
  const { state, dispatch } = useItens();
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');

  const handleCadastro = () => {
    // Verifica se o ID já existe na lista
    const idExiste = state.itens.some(item => item.id === id);

    if (idExiste) {
      Alert.alert('Erro', 'Este ID já está em uso. Por favor, escolha outro ID.');
      return;
    }

    // Verifica se todos os campos estão preenchidos
    if (!id || !nome || !descricao || !preco) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    // Cria um novo item
    const novoItem = { id, nome, descricao, preco };

    // Despacha a ação para cadastrar o item
    dispatch({ type: 'CADASTRAR_ITEM', payload: novoItem });

    // Limpa os campos após o cadastro
    setId('');
    setNome('');
    setDescricao('');
    setPreco('');

    Alert.alert('Sucesso', 'Item cadastrado com sucesso!');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'space-between', backgroundColor: '#121212' }}>
      <Text style={{ color: 'white', fontSize: 32, marginTop: 3, marginLeft: 'auto', marginRight: 'auto' }}>
        Cadastrar Itens
      </Text>

      <View style={{ backgroundColor: 'white', width: '80%', height: 560, margin: 'auto', borderRadius: 20, alignItems: 'center' }}>
        <TextInput
          style={{ width: '80%', height: 30, backgroundColor: 'white', margin: 2, borderRadius: 10, padding: 2 }}
          placeholder='ID do Item'
          value={id}
          onChangeText={setId}
        />
        <TextInput
          style={{ width: '80%', height: 30, backgroundColor: 'white', margin: 2, borderRadius: 10, padding: 2 }}
          placeholder='Nome do Item'
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={{ width: '80%', height: 30, backgroundColor: 'white', margin: 2, borderRadius: 10, padding: 2 }}
          placeholder='Descrição do Item'
          value={descricao}
          onChangeText={setDescricao}
        />
        <TextInput
          style={{ width: '80%', height: 30, backgroundColor: 'white', margin: 2, borderRadius: 10, padding: 2 }}
          placeholder='Preço do Item'
          value={preco}
          onChangeText={setPreco}
        />

        <View style={{ width: '90%', height: 2, backgroundColor: 'gray', margin: 2, borderRadius: 10 }} />

        <TouchableOpacity onPress={handleCadastro} style={{ backgroundColor: 'green', padding: 2, borderRadius: 10, margin: 2 }}>
          <Text style={{ color: 'white' }}>Cadastrar Item</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
