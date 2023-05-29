import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    id  : { type: String },
    nome: { type: String, required: true },
    sobrenome: { type: String, required: true },
    cpf: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
  }
)

userSchema.pre('save', function (next) {
  const now = new Date();

  this.updated_at = now;

  if (!this.created_at) {
    this.created_at = now;
  }

  next();
});

const users = mongoose.model('users', userSchema)

export default users