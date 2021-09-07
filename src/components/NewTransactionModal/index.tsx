import Modal from 'react-modal';
import { Container, RadioBox, TransactionTypeContainer } from './style';

import incomeImg  from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import closeImg from "../../assets/close.svg";
import { FormEvent, FormEventHandler, useContext, useEffect, useState } from 'react';
import { api } from '../../services/api';
import { TransactionsContext } from '../../TransactionsContext';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

Modal.setAppElement('#root');

export function NewTransactionModal({ isOpen, onRequestClose } : NewTransactionModalProps ) {

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [type, setType] = useState('deposit');
    const [category, setCategory] = useState('');

    const { createTransaction } = useContext(TransactionsContext);

    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        createTransaction({
            title,
            amount,
            category,
            type
        })
        
    }

    useEffect( () => {
        console.log({
            type
        })
    }, [type])

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Example Modal"
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button 
                type="button" 
                onClick={onRequestClose} 
                className="react-modal-close" 
            >
                <img src={closeImg} alt="Fecha Modal" />
            </button>

            <Container
                onSubmit={handleCreateNewTransaction}
            >
                
                <h2>Cadastrar Transação</h2>

                <input 
                    placeholder="Título"
                    type="text" 
                    value={title}
                    onChange={ event => setTitle(event.target.value) }
                />

                <input 
                    placeholder="Valor"
                    type="number" 
                    value={amount}
                    onChange={ event => setAmount(Number(event.target.value) ) }
                />

                <TransactionTypeContainer>

                    <RadioBox
                        type="button"     
                        onClick={ () => setType('deposit') }   
                        isActive={type == 'deposit'}  
                        activeColor="green"                   
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                        type="button"    
                        onClick={ () => setType('withdraw') }
                        isActive={type == 'withdraw'}        
                        activeColor="red"                                
                    >
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </RadioBox>
                    
                </TransactionTypeContainer>

                <input 
                    placeholder="Categoria"
                    type="text" 
                    value={category}
                    onChange={ event => setCategory(event.target.value) }
                />

                <button type="submit">
                    Cadastrar
                </button>

            </Container>
        </Modal>
    )

}