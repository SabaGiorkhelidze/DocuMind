import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany  } from "typeorm";
import { User } from "./User";
import { Summary } from "./Summary";
import { Classification } from "./Classification";
import { Embedding } from "./Embeddings";
import { QuestionAnswer } from "./QuestionAnswer";

@Entity("documents")
export class Document {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => User, (user) => user.documents)
  @JoinColumn({ name: "userId" })
  user!: User;

  @Column({ type: "varchar", length: 255 })
  filename!: string;

  @Column({ type: "varchar", length: 255 })
  filePath!: string;

  @Column({ type: "integer" })
  fileSize!: number;

  @Column({ type: "text" })
  content!: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt!: Date;

  @OneToMany(() => Summary, (summary) => summary.document)
  summaries!: Summary[];

  @OneToMany(() => Classification, (classification) => classification.document)
  classifications!: Classification[];

  @OneToMany(() => QuestionAnswer, (qa) => qa.document)
  questionAnswers!: QuestionAnswer[];

  @OneToMany(() => Embedding, (embedding) => embedding.document)
  embeddings!: Embedding[];
}