/**
 * Created by nad on 06/09/15.
 */
import React from 'react';
import Modal from 'react-modal';
import Input from '../commun/inputText';
import TextArea from '../commun/textArea';

class ModalAddProduct extends React.Component{
    constructor(props){
        super(props);
        let modal_div= document.getElementById('modal');
        Modal.setAppElement(modal_div);
        Modal.injectCSS();
    }

    render(){

        return(
            <div className="modal">
                <Modal className="modal-dialog"
                       isOpen={this.props.modalIsOpen}
                       onRequestClose={this.props.closeModal} >
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" onClick={this.props.closeModal}>
                                <span aria-hidden="true">&times;</span>
                                <span className="sr-only">Close</span>
                            </button>
                            <h4 className="modal-title">Ajout produit</h4>
                        </div>
                        <br/>
                        <div className="modal-body">
                            <form action="">
                                <div className="col-sm-6 div-form">
                                    <Input label='Nom Produit' name='productName' placeholder='Nom du produit'  />
                                    <Input label='Code Produit TPN' name='productCode' placeholder='Code du produit'  />

                                    <Input label='Prix GPL' name='priceInt' placeholder='Price poland'  />
                                </div>

                                <div className="col-sm-6 div-form">
                                    <div className="form-group">
                                        <label>Categorie</label>
                                        <select className="form-control">
                                            <option value="Storage">Storage</option>
                                            <option value="Monitor">Monitor</option>
                                            <option value="PC">PC</option>
                                            <option value="Cable">Cable</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label">Image </label>
                                        <input type="file" className="form-control"/>
                                    </div>
                                    <Input label='Prix public' name='pricePublic' placeholder='Prix public'  />

                                </div>
                                <div className="text-area">
                                    <TextArea label="N° de série" name="details" placeholder="Les n° de série doivent être séparés par un point virgule (;) ou un espace " />
                                </div>

                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" onClick={this.props.closeModal}>Close</button>
                            <button type="button" className="btn btn-primary" onClick={this.handleSaveClicked}>Save changes</button>
                        </div>
                    </div>
                </Modal>
            </div>


        )
    }

}

export default ModalAddProduct;