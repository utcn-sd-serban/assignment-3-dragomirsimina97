package ro.utcn.spet.example.a1.dto;
import lombok.Data;
import org.springframework.util.CollectionUtils;
import ro.utcn.spet.example.a1.entity.Question;
import ro.utcn.spet.example.a1.entity.Tag;

import java.util.List;
import java.util.stream.Collectors;

@Data
public class QuestionDTO {
    private String Title;
    private String Text;
    private String Author;
    private String CreationDate;


    public static QuestionDTO ofEntity(Question question) {
        QuestionDTO questionDTO = new QuestionDTO();
        questionDTO.setTitle(question.getTitle());
        questionDTO.setText(question.getText());
        questionDTO.setAuthor(question.getAuthor());
        questionDTO.setCreationDate(question.getCreationDate());

        return questionDTO;
    }
}
